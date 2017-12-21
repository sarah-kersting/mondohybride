import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.primary[900],
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden',
  },
  title: {
    color: theme.palette.secondary[200],
  },
});

const FooterBar = ({ classes }) => (
  <footer className={classes.main}>
    <Typography type="subheading">
      <p className={classes.title}>{'Made with love in Berlin'}</p>
    </Typography>
  </footer>
);

export default withStyles(styles)(FooterBar);
