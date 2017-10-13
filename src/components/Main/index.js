import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 64,
    paddingBottom: 64,
  },
  [theme.breakpoints.up('md')]: {
    headline: {
      fontSize: 56,
    },
    subheading: {
      fontSize: 38,
    },
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} id="about">
        <Paper className={classes.root}>
          <Typography className={classes.headline} type="headline" component="h3" color="primary">
            Phase5 Web Development.
          </Typography>
          <Typography className={classes.subheading} type="subheading" component="h4" color="secondary">
            Mobile friendly, applications, etc...
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
