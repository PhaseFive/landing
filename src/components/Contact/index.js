import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from './styles';

class Contact extends React.Component{
  state = {
    name: '',
    email: '',
    details: '',
  };

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
          <Paper className={classes.root}>
            <Typography type="headline">
              Contact us
            </Typography>
              <form className={classes.container} noValidate autoComplete="off" action="#">
                <TextField
                  required
                  id="Name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="Email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  multiline
                  rows="6"
                  id="Details"
                  label="Details"
                  className={classes.textField}
                  value={this.state.details}
                  onChange={this.handleChange('details')}
                  fullWidth
                  margin="normal"
                />
                <Button raised color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            poop
          </Grid>
        </Grid>
      </Paper>
    );
  };
};

export default withStyles(styles)(Contact);
