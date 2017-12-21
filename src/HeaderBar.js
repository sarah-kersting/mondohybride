import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.primary[900],
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.secondary[800],
    fontSize: '28px',
  },
});

const HeaderBar = ({ classes }) => (
  <header className={classes.main}>
    <Typography type="title">
      <p className={classes.title}>{'Mondo Hybride Hundkatzenschweinerei'}</p>
    </Typography>
  </header>
);

export default withStyles(styles)(HeaderBar);
