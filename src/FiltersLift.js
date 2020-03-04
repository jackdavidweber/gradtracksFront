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

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
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

class SingleFilter extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleSelectChange(e);
  }

  render() {
    const options = this.props.options;
    const classes = useStyles;
    // const theme = useTheme();
    const filterName = this.props.filterName;
    const filterValue = this.props.filterValue;
    const menuProps = this.props.menuProps;
    return(
      <FormControl className={classes.formControl}>
              <InputLabel id="demo-multiple-checkbox-label">{filterName}</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                name={filterName}
                value={filterValue}
                onChange={this.handleChange}
                input={<Input />}
                renderValue={selected => selected.join(', ')} // shows the selected values separated by commas in text box
                MenuProps={MenuProps}
              >
                {options.map(option => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={filterValue.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
      </FormControl> 
    );
  }

}


class FiltersLift extends React.Component {
  constructor(props){
    super(props);
    this.state = {menuProps: MenuProps,
                  classes: {
                    formControl: {
                      margin: 10,
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
                      marginTop: 30,
                    },
                  },
                  personName: [],
                  major: [],
                  yearsOut: [],
                  industry: [],
                  salary: [],
                  fields: {
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
                    yearsOut: 
                      [
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
                    industry: 
                      [
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
                    salary:
                      [
                        '$35k - $50k',
                        '$50k - $75k',
                        '$75k - $90k',
                        '$90k - $110k',
                        '$110k - $150k',
                        '$150k - $200k',
                        '$200k',
                      ],
                  }};
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }


  handleSelectChange(event){
    this.setState({ [event.target.name] : event.target.value});
  }
  
  
  render(){
    return (
      <div>
      <SingleFilter 
        filterName = "personName"
        filterValue = {this.state.personName}
        classes = {this.state.classes}
        options = {this.state.fields.names}
        handleSelectChange = {this.handleSelectChange}
        menuProps = {this.state.menuProps}
      />
      <SingleFilter 
        filterName = "major"
        filterValue = {this.state.major}
        options = {this.state.fields.major}
        classes = {this.state.classes}
        handleSelectChange = {this.handleSelectChange}
        menuProps = {this.state.menuProps}
      />
      <SingleFilter 
        filterName = "salary"
        filterValue = {this.state.salary}
        options = {this.state.fields.salary}
        classes = {this.state.classes}
        handleSelectChange = {this.handleSelectChange}
        menuProps = {this.state.menuProps}
      />
      <SingleFilter 
        filterName = "industry"
        filterValue = {this.state.industry}
        options = {this.state.fields.industry}
        classes = {this.state.classes}
        handleSelectChange = {this.handleSelectChange}
        menuProps = {this.state.menuProps}
      />
      <SingleFilter 
        filterName = "yearsOut"
        filterValue = {this.state.yearsOut}
        options = {this.state.fields.yearsOut}
        classes = {this.state.classes}
        handleSelectChange = {this.handleSelectChange}
        menuProps = {this.state.menuProps}
      />

      <FormControl className={this.state.classes.formControl}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          name="personName"
          value={this.state.personName}
          onChange={this.handleSelectChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')} // shows the selected values separated by commas in text box
          MenuProps={this.state.menuProps}
        >
          {this.state.fields.names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={this.state.personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    );
  }
}

export default FiltersLift;