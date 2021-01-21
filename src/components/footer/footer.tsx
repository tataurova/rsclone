import * as React from 'react';
import Container from '@material-ui/core/Container';
import Copyright from '../copyright/copyright';
import useStyles from './footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </footer>
  );
};

export default Footer;
