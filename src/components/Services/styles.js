const styles = theme => ({
  root: {
    padding: 10,
  },
  title: {
    marginLeft: 3 + '%',
    fontSize: 2 + 'rem',
    marginBottom: 5,
  },
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  imgContainer: {
    borderRadius: 50 + '%',
    height: 100,
    overflow: 'hidden',
    width: 100
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    objectPosition: '50%'
  },
  sectionLeft: {
    width: '30%'
  },
  sectionText: {
    width: 100 + '%',
    textAlign: 'center'
  },
  media: {
    height: 200,
  },
  card: {
    maxWidth: 345,
    margin: '0 auto',
    minHeight: 400,
  },
});

export default styles;
