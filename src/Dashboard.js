import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Filters from './Filters';
import FiltersMapping from './FiltersMapping'
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import FiltersLift from './FiltersLift'
import Button from '@material-ui/core/Button';
import AlumniByMajor from './AlumniByMajor';
import AlumniByGradSchool from './AlumniByGradSchool';
import AlumniByGradDegree from './AlumniByGradDegree';

const degreeData = [
  ["degree", "phd", "MA", "MS", "MFA", "MBA", "JD", "MD", "DDS"],
  ['Computer Science', 1084, 688, 92, 1747, 1150, 1150, 1798, 688],
  ['Mathematics', 194, 1088, 885, 1463, 1193, 995, 255, 177],
  ['Physics', 1759, 1265, 355, 576, 614, 1380, 230, 1300],
  ['Chemistry', 1494, 693, 419, 1206, 102, 1249, 113, 695],
  ['Biology', 1327, 1855, 1909, 1197, 1105, 1296, 1326, 1998],
  ['Economics', 1394, 1852, 877, 1408, 575, 1283, 1664, 9]
]

const majorData = [
  ["Major", "Count"],
  ["Africana Studies", 2937],
  ["American Studies", 4885],
  ["Anthropology", 4310],
  ['Art History',	2400],
  ['Asian American Studies', 4698],
  ['Asian Studies', 915],
  ['Biology', 902],
  ['Chemistry', 757],
  ['Chinese',	2691],
  ['Classics', 2627],
  ['Cognitive Science', 4877],
  ['Computer Science', 1289],
  ['Dance', 2942],
  ['Economics', 1886],
  ['English',	920],
  ['French', 3059],
  ['G & W Studies', 703],
  ['Geology',	2651],
  ['German Studies', 720]
];

const gradSchoolData = [
  ["Grad School", "Count"],
  ["Stanford University",	584],
  ["UCLA", 670],
  ["UC Berkeley",	675],
  ["Carnegie Mellon University",	498],
  ["MIT",	851],
  ["Harvard University",	86],
  ["Princeton University", 906],
  ["Columbia University",	643],
  ["Claremont Graduate University",	532],
  ["Yale University", 104],
  ["Rice University",	903],
  ["University of Chicago", 189],
  ["University of Pennsylvania", 426]
];


const put = {
  salary: [
  '$35k - $50k',
  '$50k - $75k',
  '$75k - $90k',
  '$90k - $110k',
  '$110k - $150k',
  '$150k - $200k',
  '$200k',
  ],
  industry: [
   'Finance',
   'Business',
   'Technology',
   'Politics',
   'Military',
   'Education',
   'Movie',
   'Music',
   'Medicine',
   'Banking',
   'Dance',
   'Sports',
  ],
  yearsOut: [
   '0-5 years',
   '6-10 years',
   '11-15 years',
   '16-20 years',
   '21-25 years',
   '26-30 years',
   '31-35 years',
   '36-40 years',
   '41-45 years',
   '46-50 years',
  ],
  major: [
   'African Studies',
   'American Studies',
   'Anthropology',
   'Art',
   'Art History',
   'Asian American Studies',
   'Asian Studies',
   'Biology',
   'Chemistry',
  ],
  names: [
   'Oliver Hansen',
   'Van Henry',
   'April Tucker',
   'Ralph Hubbard',
   'Omar Alexander',
   'Carlos Abbott',
   'Miriam Wagner',
   'Bradley Wilkerson',
   'Virginia Andrews',
   'Kelly Snyder',
 ],
}


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


// function fetchGraphData(b){
//   fetch('http://127.0.0.1:8080/api/Alumni', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(b),

//   });
// }

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
 
  const [filters, setFilters] = useState({})

  async function fetchData() {
    const res = await fetch(`http://127.0.0.1:8080/api/Alumni`)
    const data = await res.json()
    setFilters(data)
}

  useEffect(() => { fetchData() }, [])


  // create json with keys representing field names and values representing lists of fields for each fieldname
  //For example put = {major: [Econ, CS, ...], industry: [Tech, Finance, ...],...}
  console.log(filters)


  // sets default data for the graphs as all of the filters being empty which is just
  //interpreteded as all data by the database
  //const [data, setData] = React.useState(fetchGraphData(emptyObjOfArrays(put)));



  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const applyFilters = vals => {
    //apply filters takes the filters from FiltersMapping and sends a POST request to Marcel's backend.
    // it then uses the return of the POST request to update the state.
    // setData(fetchGraphData(vals));
    // console.log(data);

    alert('filters have been applied')
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
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <FiltersMapping input={put} buttonBehavior= {applyFilters} />
                <Button className={classes.fixedWidth} align="center" variant="contained">Default</Button>
              </Paper>
            </Grid>
            {/* Alumni by major */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <AlumniByMajor graphData = {majorData} />
              </Paper>
            </Grid>
            {/* Alumni by grad School */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <AlumniByGradSchool graphData = {gradSchoolData} />
              </Paper>
            </Grid>      
            {/* Alumni by grad Degree */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <AlumniByGradDegree graphData = {degreeData} />
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
