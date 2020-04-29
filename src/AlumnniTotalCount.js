import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes({count}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography align= 'center' variant="h5">Number of Alumni that Match Above Filter:</Typography>
        <Typography align= 'center' variant="h3">{count}</Typography>
      </ThemeProvider>
    </div>
  );
}