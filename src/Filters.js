import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  // noLabel: {
  //   marginTop: theme.spacing(3),
  // },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
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
];

const major = [
    'African Studies',
    'American Studies',
    'Anthropology',
    'Art',
    'Art History',
    'Asian American Studies',
    'Asian Studies',
    'Biology',
    'Chemistry',
   ];

   const yearsOut = [
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
   ];
   const industry = [
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
   ];
   const salary = [
    '$35k - $50k',
    '$50k - $75k',
    '$75k - $90k',
    '$90k - $110k',
    '$110k - $150k',
    '$150k - $200k',
    '$200k',
   ];
   

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [values, setValues] = React.useState({
    // Selects
    "personName": [],
    "yearsOut": [],
    "industry": [],
    "salary": [],
    "major": [],
    "singlesex.or.coed": [],
  });

  const handleChange = name => (event, newValue) => {
    var updatedVal = newValue ? newValue : event.target.value
    if(Array.isArray(event.target.value)){
      updatedVal = event.target.value
    }
    console.log(updatedVal)
    setValues({...values, [name]: updatedVal}); // this if statement is clearly not handling personChange very well
  };
  


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Major</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={values["major"]}
          onChange={handleChange("major")}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {major.map(major => (
            <MenuItem key={major} value={major}>
              <Checkbox checked={values["major"].indexOf(major) > -1} />
              <ListItemText primary={major} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Industry</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={values["industry"]}
          onChange={handleChange("industry")}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {industry.map(industry => (
            <MenuItem key={industry} value={industry}>
              <Checkbox checked={values["industry"].indexOf(industry) > -1} />
              <ListItemText primary={industry} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Salary</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={values["salary"]}
          onChange={handleChange("salary")}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {salary.map(salary => (
            <MenuItem key={salary} value={salary}>
              <Checkbox checked={values["salary"].indexOf(salary) > -1} />
              <ListItemText primary={salary} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Years Out</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={values["yearsOut"]}
          onChange={handleChange("yearsOut")}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {yearsOut.map(yearsOut => (
            <MenuItem key={yearsOut} value={yearsOut}>
              <Checkbox checked={values["yearsOut"].indexOf(yearsOut) > -1} />
              <ListItemText primary={yearsOut} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}