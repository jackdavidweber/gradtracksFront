import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="personalLink.com">
          Angela
        </Link>{', '}
        <Link color="inherit" href="https://www.linkedin.com/in/jackdavidweber/">
          Jack
        </Link>{', '}
        <Link color="inherit" href="personalLink.com">
          Kiel
        </Link>{', '}
        <Link color="inherit" href="personalLink.com">
          Marcel
        </Link>{', '}
        <Link color="inherit" href="personalLink.com">
          Yury
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Typography>
    );
  }

  export default Copyright;