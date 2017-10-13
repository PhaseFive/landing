import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { purple, green, red } from 'material-ui/colors'
import Grid from 'material-ui/Grid';

import Main from './components/Main';
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 56,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 48,
      paddingRight: 48,
    },
  },
})

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <Grid container className={classes.root}>
            <Main />
            <Main />
            <Main />
            <Main />
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
