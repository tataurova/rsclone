import * as React from 'react';
import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type AccountType = {
  address: string;
  author: string;
}

const logoGitHub = require('../../assets/icons/git.svg');

const useStyles = makeStyles({
  link: {
    display: 'flex',
    alignItems: 'flex-end',
    margin: '5px',
  },
  img: {
    width: '20px',
    marginRight: '5px',
  },
});

const AccountGithub = (props: AccountType) => {
  const preventDefault = (event) => event.preventDefault();
  const styles = useStyles();

  return (
      <Box className={styles.link} >
        <img className={styles.img} src={ logoGitHub } alt='GitHub'/>
        <Link href={props.address} onClick={preventDefault} target="_blank" rel="noreferrer">
          {props.author}
        </Link>
      </Box>
  );
};

export default AccountGithub;
