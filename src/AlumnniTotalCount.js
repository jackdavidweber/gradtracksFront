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
        <Typography variant="h3">Number of Alumni that Match Above Filter: {count}</Typography>
      </ThemeProvider>
    </div>
  );
}