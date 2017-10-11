import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';
import { red, purple } from 'material-ui/colors';

export default class ContentWrapper extends Component{
  render(){
    return(
      <Paper>
        <Typography>
          This is content
        </Typography>
      </Paper>
    )
  }
}
