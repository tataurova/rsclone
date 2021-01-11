import * as React from 'react';
import AccountGitHub from './accountGitHub/AccountGitHub';

// import style from './Footer.module.css';

function Footer() {
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
          // className={style.footer}
          style={styles.footer}
      >
        <div>
          Navigation:

          <p>Settings</p>
          <p>Inform</p>
        </div>
        <ul
            // className={style.account}
        >
          <AccountGitHub author='Olga Tataurova' address='https://github.com/tataurova/'/>
          <AccountGitHub author='Leonid Shuliak' address='https://github.com/shuliakleonid/'/>
          <AccountGitHub author='Andrei Padyslenkau' address='https://github.com/andreizayaz'/>
        </ul>
        <div
            // className={style.logo}
        >
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img style={styles.img} src='https://rs.school/images/rs_school_js.svg' alt="RS School Logo"/>
          </a>
          <div>2021</div>
        </div>
      </footer>
  );
}

export default Footer;
