import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import styles from './styles';

/*
  <Grid item xs={12} md={4}>
          <Paper className={classes.section}>
            <div className={classes.sectionLeft}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.image}
                  src='https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'
                  alt='placeholder'
                />
              </div>
            </div>
            <div className={classes.sectionText}>Mobile Friendly Web Development</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.section}>
            <div className={classes.sectionLeft}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.image}
                  src='https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'
                  alt='placeholder'
                />
              </div>
            </div>
            <div className={classes.sectionText}>Websites and Web Applications</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.section}>
            <div className={classes.sectionLeft}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.image}
                  src='https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'
                  alt='placeholder'
                />
              </div>
            </div>
            <div className={classes.sectionText}>iOS and Android Applications</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.section}>
            <div className={classes.sectionLeft}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.image}
                  src='https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'
                  alt='placeholder'
                />
              </div>
            </div>
            <div className={classes.sectionText}>Scalable Solutions</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.section}>
            <div className={classes.sectionLeft}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.image}
                  src='https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'
                  alt='placeholder'
                />
              </div>
            </div>
            <div className={classes.sectionText}>Maintenance and Support</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            BUTTON
          </Paper>
        </Grid>
*/

const Services = (props) => {
  const { classes } = props;

  return (
    <Paper>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title} type="headline" component="h1">Services</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card raised={true} className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg"
              title="Image"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Mobile Friendly
              </Typography>
              <Typography component="p">
                Our websites are mobile friendly. Everyone has a phone in these futuristic days. You must take advantage of this web lol.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card raised={true} className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg"
              title="Image"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Websites and Applications
              </Typography>
              <Typography component="p">
                Full stack web applications. Full database functionality etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card raised={true} className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg"
              title="Image"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                iOS and Android
              </Typography>
              <Typography component="p">
                Expand your horizon by targetting the most popular smart phone operating systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Services);
