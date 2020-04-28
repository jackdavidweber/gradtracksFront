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
import AlumniBubbleMap from './AlumniBubbleMap';
import Cloud from './WordCloudByIndustry';
import Copyright from './Copyright'

import { ScrollTo } from "react-scroll-to";
import Button from '@material-ui/core/Button';



// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240;
const mapData = {
    city: [
      // [Longitude, Latitude]
        { "name": "San Francisco", "coordinates": [-122.419418, 37.774929], "population": 50000 },
        { "name": "Los Angeles", "coordinates": [-118.243683, 34.052235], "population": 500 },
        { "name": "Austin", "coordinates": [-97.743057, 30.267153], "population": 200 },
        { "name": "Seattle", "coordinates": [-122.332069, 47.606209], "population": 2000 },
        { "name": "New York City", "coordinates": [-74.005974, 40.712776], "population": 7000 },
        { "name": "Palo Alto", "coordinates": [-122.16067, 37.444786], "population": 250 },
        { "name": "San Jose", "coordinates": [-121.887082, 37.337207], "population": 580 },
        { "name": "Washingto D.C.", "coordinates": [-77.0312812, 38.8954381], "population": 3000 },

    ],
}
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        {/* <CameraIcon className={classes.icon} /> */}
        <Typography variant="h6" color="inherit" noWrap>
          GradTracks
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
    {/* Hero unit */}
    <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  GradTracks
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                </Typography>
                {/* <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                    <ScrollTo>
                      {({ scrollTo }) => (
                        <Button variant="contained" color="primary" onClick={() => scrollTo({ y: 600, smooth: true })}>
                          Get Started
                        </Button>
                      )}
                    </ScrollTo>
                      {/* <Button variant="contained" color="primary">
                        Get Started
                      </Button> */}
                    {/*</Grid>
                    <Grid item>
                      <Button href= "https://github.com/jack1536/gradtracksFront" variant="outlined" color="primary">
                        Source Code
                      </Button>
                    </Grid>
                  </Grid>
                </div> */}

              </Container>
              <Grid container spacing={2} justify="center">
                <Grid item>
                {Object.keys(filters).length > 0 && <FiltersMapping input={filters} buttonBehavior= {applyFilters} />}
                </Grid>

              </Grid>
            </div>
    <div className={classes.root}>

          <Grid container spacing={3}>
            {/* Filters */}
            {/* <Grid item xs={9}>
              <Paper className={classes.paper}>
                {Object.keys(filters).length > 0 && <FiltersMapping input={filters} buttonBehavior= {applyFilters} />}
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
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
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                {<AlumniBubbleMap graphData = {mapData} /> }
              </Paper>
            </Grid>
            <Grid item sm={12} md = {6}>
              <Paper className={classes.paper}>
                <Cloud/>
              </Paper>
            </Grid>

          </Grid>
          {/* <Box pt={4}>
          </Box> */}
        {/* </Container> */}
      {/* </main> */}
    </div>
    </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          College Spreadsheet Generator
        </Typography>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Click here to see the source code
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
