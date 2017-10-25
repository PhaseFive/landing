import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import styles from './styles';

const Services = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Paper>
            Mobile Friendly Web Development
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            Websites and Web Applications
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            iOS and Android Applications
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            Scalable Solutions
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            Maintenance and Support
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            BUTTON
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Services);
