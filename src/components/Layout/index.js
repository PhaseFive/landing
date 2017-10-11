import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { red, purple } from 'material-ui/colors';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB

const navItems = [
  {
    title: 'Intro'
  },
  {
    title: 'About Us'
  },
  {
    title: 'Contact'
  },
]

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Layout extends Component{
  constructor(){
    super()
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  handleDrawerToggle(){
    this.setState({mobileOpen: !this.state.mobileOpen})
  }

  handleDrawerClose(){
    this.setState({mobileOpen: false})
  }

  render(){
    const {classes} = this.props

    const navigation = navItems.map((navItem, index) => {
      return (
        <Button onClick={this.handleDrawerClose} key={index}>
          {navItem.title}
        </Button>
      )
    });


    return(
      <div>
        <Hidden smDown>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                This is Phase5!
              </Typography>
              {navigation}
            </Toolbar>
          </AppBar>
        </Hidden>

        <Hidden mdUp>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                This is Phase5!
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            color='accent'
            type="temporary"
            open={this.state.mobileOpen}
            onRequestClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
              {navigation}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
