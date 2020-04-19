import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import FiltersMapping from './FiltersMapping'
import AlumniByMajor from './AlumniByMajor';
import AlumniByGradSchool from './AlumniByGradSchool';
import AlumniByGradDegree from './AlumniByGradDegree';
import AlumniByIndustry from './AlumniByIndustry';
import AlumniBySeniority from './AlumniBySeniority';
import AlumniTotalCount from './AlumnniTotalCount';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const graphHeight = '200px';
const graphWidth = '500px'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  fixedWidth: {
    width: 240,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-center',
  }
}));

function emptyObjOfArrays(inp){
  // copies input object to fields object
  const fields = Object.keys(inp);

  //sets all fields equal to an empty array
  fields.map(function(key, index){
    fields[key] = [];
  });

  return fields;
}


function removeUnnecessaryPropertiesFromPostBody(o){
  // backend does not handle properties with empty arrays associated with them. 
  // This function makes sure that all properties being passed to the backend have values that are non empty arrays

  var newObj = {};

  for (var k in o){
    var v = o[k];

    // if value is an array of length greater than 0
    if (Array.isArray(v) && v.length > 0){
      newObj[k]=v
    }

  }

  return newObj;
}

const useForceUpdate = () => useState()[1];


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
 
  const [filters, setFilters] = useState({})
  const [graphData, setGraphData] = useState({})

  const forceUpdate = useForceUpdate()

  // GET REQUEST
  async function getRequest() {
    const res = await fetch(`http://127.0.0.1:8080/api/Alumni`)
    const data = await res.json()
    setFilters(data)
}

  useEffect(() => { 
    // When the page loads, GET request and POST request are called to populate the page initially
    getRequest() 
    
    // POST request is called with no body which asks the backend for all data
    postRequest({})
  }, [])

  // POST REQUEST
  async function postRequest(postBody){
    // used https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples "POST request using fetch with async/await"

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBody)
    };
    const response = await fetch('http://127.0.0.1:8080/api/Alumni', requestOptions);
    const data = await response.json();
    setGraphData(data);
  }



  const handleDrawerOpen = () => {
    console.log(graphData);
    setOpen(true);
  };
  const handleDrawerClose = () => {
    console.log(graphData);
        setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const applyFilters = vals => {

    var apiOutput = postRequest(removeUnnecessaryPropertiesFromPostBody(vals))
    //alert('filters have been applied \n' + JSON.stringify(removeUnnecessaryPropertiesFromPostBody(vals)));
    forceUpdate();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Filters */}
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                {Object.keys(filters).length > 0 && <FiltersMapping input={filters} buttonBehavior= {applyFilters} />}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <AlumniTotalCount count={graphData['AlumniTotalCount']}/>
              </Paper>
            </Grid>
            {/* Alumni by major */}
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {graphData["AlumiByMajors"] && <AlumniByMajor height= {graphHeight} width = {graphWidth} graphData = {graphData["AlumiByMajors"]}/>}
              </Paper>
            </Grid>
            {/* Alumni by grad School */}
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {graphData["AlumiByGradSchools"] && <AlumniByGradSchool height= {graphHeight} width = {graphWidth} graphData = {graphData["AlumiByGradSchools"]}/>}
                {/* <AlumniByGradSchool graphData = {gradSchoolData} /> */}
              </Paper>
            </Grid>      
            {/* Alumni by grad Degree */}
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {graphData["AlumniByGradDegrees"] && <AlumniByGradDegree height= {graphHeight} width = {graphWidth} graphData = {graphData["AlumniByGradDegrees"]} />}
                {/* <AlumniByGradDegree graphData = {degreeData} /> */}
              </Paper>
            </Grid>  
            {/* Alumni by Industry */}
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {/* TODO: Fix naming inconsistency with AlumniByIndustries vs AlumniByIndustry */}
              {graphData["AlumiByIndustries"] && <AlumniByIndustry height= {graphHeight} width = {graphWidth} graphData = {graphData["AlumiByIndustries"]}/>}
              {/* <AlumniByIndustry graphData = {industryData} /> */}
              </Paper>
            </Grid>  
            {/* Alumni by grad Degree */}
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {/* TODO: Fix naming differences of AlumiBySeniorities vs AlumniBySeniority */}
                {graphData["AlumiBySeniorities"] && <AlumniBySeniority height= {graphHeight} width = {graphWidth} graphData = {graphData["AlumiBySeniorities"]}/>}
              </Paper>
            </Grid>  
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
