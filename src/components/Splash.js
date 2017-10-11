// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia } from 'material-ui/Card';

const styles = {
  card: {
  },
  media: {
    height: 700,
  },
};

function Splash(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://2sltl91mfmb53nr7sf3j0zxj-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/LakeMerritt_LakeChalet_Pano_Color_Web_2500x1126_20130306_rev1.jpg"
        title="Lake Merritt Skyline"
      />
    </Card>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
