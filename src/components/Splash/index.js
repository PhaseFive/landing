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

const tabs = [
  {
    headline: 'Web',
    subheading: 'Responsive, mobile-first web development',
    image: WebImage,
    icon: Web,
  },
  {
    headline: 'Mobile',
    subheading: 'Android and IOS app development with React Native',
    image: MobileImage,
    icon: Smartphone,
  },
  {
    headline: 'Full Stack',
    subheading: 'Full Stack Developers ready to fulfill your developing needs',
    image: FullStackImage,
    icon: Apps,
  },
];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let newTab = this.state.currentTab + 1;
      if (newTab >= tabs.length) {
        newTab = 0;
      }
      this.handleChange(null, newTab)
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleChange = (event, value) => {
    this.setState({ currentTab: value });
  };

  render() {
    const { classes } = this.props;
    const { currentTab } = this.state;
    const tab = tabs[currentTab];

    return (
      <Paper className={classes.root}>
        <SplashDisplay classes={classes} tab={tab} />
        <div className={classes.splashFooter}>
          <TabsDisplay
            currentTab={currentTab}
            tabs={tabs}
            handleChange={this.handleChange}
          />
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

const SplashDisplay = (props) => {
  const { classes } = props;
  const { image, headline, subheading } = props.tab;

  return (
    <div className={classes.splash}>
      <img src={image} className={classes.splashImg} alt="Splash" />
      <div className={classes.textOver}>
        <Typography className={classes.headline} type="headline" component="h3" color="primary">
          {headline}
        </Typography>
        <Typography className={classes.subheading} type="subheading" component="h4" color="inherit">
          {subheading}
        </Typography>
      </div>
    </div>
  );
};

const TabsDisplay = (props) => {
  const { currentTab, handleChange } = props;
  const tabs = props.tabs.map((tab, index) => {
    return (
      <Tab key={index} value={index} icon={<tab.icon />} />
    );
  });

  return (
    <Tabs
      value={currentTab}
      onChange={handleChange}
      fullWidth={true}
    >
      {tabs}
    </Tabs>
  );
};

export default withStyles(styles)(Splash);
