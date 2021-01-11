import * as React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
}));

const Nav = () => {
  const styles = useStyles();

  return (
      <Breadcrumbs className={styles.menuButton} aria-label="breadcrumb">
        <Link color="inherit" href="#">
          Пропали
        </Link>
        <Link color="inherit" href="#">
          Ищут родственников
        </Link>
        <Link color="inherit" href="#">
          Активные поиски
        </Link>
        <Link color="inherit" href="#">
          Закрытые поиски
        </Link>
      </Breadcrumbs>
  );
};
export default Nav;
