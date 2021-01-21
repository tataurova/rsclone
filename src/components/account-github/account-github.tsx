import * as React from 'react';
import { Link } from '@material-ui/core';
import useStyles from './account-github.styles';

type AccountType = {
  address: string;
  author: string;
}

const logoGitHub = require('../../assets/icons/git.svg');

const AccountGithub = (props: AccountType) => {
  const preventDefault = (event) => event.preventDefault();
  const styles = useStyles();

  return (
      <span className={styles.link}>
          <img className={styles.img} src={ logoGitHub } alt='GitHub'/>
          <Link className={styles.linkColor} href={props.address} onClick={preventDefault} target="_blank" rel="noreferrer">
              {props.author}
          </Link>
      </span>
  );
};

export default AccountGithub;
