import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red, indigo } from 'material-ui/colors';
import Grid from 'material-ui/Grid';

import Splash from './components/Splash';
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
    error: red,
  },
});

const styles = theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    marginTop: 48,
    paddingTop: 0,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    [theme.breakpoints.up('md')]: {
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 48,
      paddingRight: 48,
    },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <NavBar />
          <Grid container>
            <Grid item xs={12}>
              <Splash />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
