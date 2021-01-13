import * as React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { PageName } from '../../const';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
}));

const Nav: React.FunctionComponent = () => {
  const styles = useStyles();

  return (
      <Breadcrumbs className={styles.menuButton} aria-label="breadcrumb">
        <Link to={PageName.GONE}>
          Пропали
        </Link>
        <Link to={PageName.LOOKING_RELATIVES}>
          Ищут родственников
        </Link>
        <Link to={PageName.ACTIVE_SEARCHES}>
          Активные поиски
        </Link>
        <Link to={PageName.CLOSED_SEARCHES}>
          Закрытые поиски
        </Link>
      </Breadcrumbs>
  );
};
export default Nav;
