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
import Button from '@material-ui/core/Button';


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
  noLabel: {
    marginTop: theme.spacing(3),
  },
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

function emptyObjOfArrays(inp){
  // copies input object to fields object
  const fields = Object.keys(inp);

  //sets all fields equal to an empty array
  fields.map(function(key, index){
    fields[key] = [];
  });

  return fields;
}

export default function MultipleSelect({input, buttonBehavior}) {
  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = React.useState(emptyObjOfArrays(input));

  const handleChange = name => (event, newValue) => {
    var updatedVal = newValue ? newValue : event.target.value
    if(Array.isArray(event.target.value)){
      updatedVal = event.target.value
    }
    //console.log(updatedVal)
    setValues({...values, [name]: updatedVal}); // this if statement is clearly not handling personChange very well
  };
  
  const fields = Object.keys(input);
  // console.log(fields);

  function handleClick(){
    buttonBehavior(values);
  }
  // console.log("values:", values);

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
          {input[field].map(label => (
            <MenuItem key={label} value={label}>
              <Checkbox checked={values[field].indexOf(label) > -1} />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      ))}
      <Button onClick={handleClick} variant="contained" color="primary" className={classes.button}>
        Apply Filters
      </Button>
    </div>
  );
}