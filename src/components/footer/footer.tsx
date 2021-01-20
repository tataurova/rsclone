import * as React from 'react';
import { Box } from '@material-ui/core';
import AccountGithub from '../account-github/account-github';

const Footer = () => {
  const styles = {
    img: {
      width: '70px',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgb(77, 128, 179)',
    },

  };
  return (
      <footer style={styles.footer} >
        <Box>
          <AccountGithub author='Olga Tataurova' address='https://github.com/tataurova/'/>
          <AccountGithub author='Leonid Shuliak' address='https://github.com/shuliakleonid/'/>
          <AccountGithub author='Andrei Padyslenkau' address='https://github.com/andreizayaz'/>
        </Box>
        <Box>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img style={styles.img} src='https://rs.school/images/rs_school_js.svg' alt="RS School Logo"/>
          </a>
          <Box fontSize={16}
               textAlign="center"
               fontWeight="fontWeightBold"
          >2021</Box>
        </Box>
      </footer>
  );
};
export default Footer;
