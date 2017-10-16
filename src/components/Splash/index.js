import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Web, Smartphone, Apps } from 'material-ui-icons';

import styles from './styles';
import WebImage from './web.jpeg';
import MobileImage from './mobile.jpeg';
import FullStackImage from './fullstack.jpeg';

class Splash extends Component {
  state = {
    value: 'web',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    let headline, subheading, image;

    if (value === 'web') {
      headline = 'Web';
      subheading = 'Responsive, mobile-first web development';
      image = WebImage;
    }
    else if (value === 'mobile') {
      headline = 'Mobile';
      subheading = 'Android and IOS app development with React Native';
      image = MobileImage;
    }
    else {
      headline = 'Full Stack';
      subheading = 'Full Stack Developers ready to fulfill your developing needs';
      image = FullStackImage;
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.splash}>
          <img src={image} className={classes.splashImg} alt="Splash" />
          <div className={classes.textOver}>
            <Typography type="headline" component="h3" color="primary">
              {headline}
            </Typography>
            <Typography type="subheading" component="h4" color="inherit">
              {subheading}
            </Typography>
          </div>
        </div>
        <div className={classes.splashFooter}>
          <Tabs value={value} onChange={this.handleChange} fullWidth={true}>
            <Tab value="web" icon={<Web />} />
            <Tab value="mobile" icon={<Smartphone />} />
            <Tab value="fullstack" icon={<Apps />} />
          </Tabs>
          <Button className={classes.button} type="button" color="inherit">
            More...
          </Button>
        </div>
      </Paper>
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
