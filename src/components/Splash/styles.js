const styles = theme => ({
  root: {
    maxHeight: '100%',
    padding: 5,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  splash: {
    display: 'flex',
  },
  textOver: {
    position: 'absolute',
    paddingTop: '1%',
    paddingLeft: '3%',
  },
  splashImg: {
    maxHeight: 512,
    width: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
  },
  splashFooter: {
    display: 'flex',
  },
  button: {
    marginLeft: 'auto',
  }
});

export default styles;
