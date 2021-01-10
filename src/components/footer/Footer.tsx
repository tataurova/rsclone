import React from 'react';
import AccountGitHub from './accountGitHub/AccountGitHub';
import style from './Footer.module.css';

function Footer() {
  return (
        <footer className={style.footer}>
            <div>
                Navigation:

                <p>Settings</p>
                <p>Inform</p>
            </div>
            <ul className={style.account}>
                <AccountGitHub autor='Olga Tataurova' address='https://github.com/tataurova/'/>
                <AccountGitHub autor='Leonid Shuliak' address='https://github.com/shuliakleonid/'/>
                <AccountGitHub autor='Andrei Padyslenkau' address='https://github.com/andreizayaz'/>
            </ul>
            <div className={style.logo}>
                <a href="https://rs.school/js/" target="_blank">
                    <img src='https://rs.school/images/rs_school_js.svg' alt="RS School Logo"/>
                </a>
                <div>2021</div>
            </div>
        </footer>
  );
}
export default Footer;
