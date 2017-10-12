import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    minHeight: 46,
  },
  flex: {
    flex: 1,
  },
  navLink: {
    '&:link': {
      color: 'inherit',
      textDecoration: 'none',
    },
    '&:visited': {
      color: 'inherit',
      textDecoration: 'none',
    },
    '&:active': {
      color: 'red',
    },
    paddingLeft: 20,
  },
})

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        <AppBar position="fixed">
          <Toolbar className={classes.root}>
            <Typography type="title" color="inherit" className={classes.flex}>
              Phase 5
            </Typography>
            <Typography type="button" color="inherit">
              <a className={classes.navLink} href="#about">
                About
              </a>
            </Typography>
            <Typography type="button" color="inherit">
              <a className={classes.navLink} href="#contact">
                Contact
              </a>
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
