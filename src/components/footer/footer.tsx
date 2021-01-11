import * as React from 'react';
import AccountGithub from '../account-github/account-github';

import * as style from './footer.module.css';
const logo =  require("../../../public/assets/img/bg.jpg");

const Footer = () => {
  const styles = {
    img: {
      width: '100px',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'rgb(77, 128, 179)',
    },

  };
  return (
      <footer
          className={style.footer}
          style={styles.footer}
      >
        <div>
          Navigation:

          <p>Settings</p>
          <p>Inform</p>
        </div>
        <img src={ logo.default } />
        <ul
            className={style.account}
        >
          <AccountGithub author='Olga Tataurova' address='https://github.com/tataurova/'/>
          <AccountGithub author='Leonid Shuliak' address='https://github.com/shuliakleonid/'/>
          <AccountGithub author='Andrei Padyslenkau' address='https://github.com/andreizayaz'/>
        </ul>
        <div
            className={style.logo}
        >
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img style={styles.img} src='https://rs.school/images/rs_school_js.svg' alt="RS School Logo"/>
          </a>
          <div>2021</div>
        </div>
      </footer>
  );
};

export default Footer;
