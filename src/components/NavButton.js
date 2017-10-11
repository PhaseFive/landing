// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function NavButton(props) {
  const { classes } = props;
  return (
    <Button color="contrast" className={classes.button}>
      {props.buttonName}
    </Button>
  )
}

NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavButton);
