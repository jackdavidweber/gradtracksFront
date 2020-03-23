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
   
   const input = {
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

function emptyObjOfArrays(inp){
  // copies input object to fields object
  const fields = Object.keys(inp);

  //sets all fields equal to an empty array
  fields.map(function(key, index){
    fields[key] = [];
  });

  return fields;
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [values, setValues] = React.useState(emptyObjOfArrays(input));

  const handleChange = name => (event, newValue) => {
    var updatedVal = newValue ? newValue : event.target.value
    if(Array.isArray(event.target.value)){
      updatedVal = event.target.value
    }
    console.log(updatedVal)
    setValues({...values, [name]: updatedVal}); // this if statement is clearly not handling personChange very well
  };
  
  const fields = Object.keys(input);
  console.log(fields);

  return (
    <div>
      {fields.map(field => (
        <FormControl key={field} className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">{field}</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={values[field]}
          onChange={handleChange(field)}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {input[field].map(major => (
            <MenuItem key={major} value={major}>
              <Checkbox checked={values[field].indexOf(major) > -1} />
              <ListItemText primary={major} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      ))}

    </div>
  );
}