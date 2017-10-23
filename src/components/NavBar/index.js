import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      mobileOpen: false
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

  render() {
    const { classes } = this.props;

    const navButtons = navLinks.map((navLink, index) => {
      return (
        <Button key={index} type="button" color="inherit">
          <a className={classes.navLink} href={navLink.href}>
            {navLink.title}
          </a>
        </Button>
      )
    })

    return (
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <Hidden mdUp>
            <IconButton
              color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              color='accent'
              type="temporary"
              open={this.state.mobileOpen}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {navButtons}
            </Drawer>
          </Hidden>

          <Typography type="title" color="inherit" className={classes.flex}>
            Phase 5
          </Typography>

          <Hidden smDown>
            {navButtons}
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
  },
})

const navLinks = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Contact',
    href: '#contact'
  },
]

export default withStyles(styles)(Navbar);
