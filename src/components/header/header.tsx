import * as React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Button, Toolbar,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Drawer from '@material-ui/core/Drawer';
import { useTranslation } from 'react-i18next';
import NameSpace from '../../reducer/name-space';
import {
  AuthorizationStatus, RouteName, MenuItemText, ActiveMenuItemName,
} from '../../const';
import Nav from '../nav/nav';
import useStyles from './header.styles';
import { ActionCreator } from '../../reducer/app/app';
import { Operation as UserOperation } from '../../reducer/user/user';
import { ThemeContext } from '../theme-provider/theme-provider';

interface Props {
    page: string;
    authorizationStatus: string;
    logout: () => void;
}

const logo = require('../../assets/icons/logo.svg');

const Header: React.FunctionComponent<Props> = ({
  page, authorizationStatus, logout,
}: Props) => {
  const classes = useStyles();
  const history = useHistory();
  function handleClick() {
    authorizationStatus === AuthorizationStatus.NO_AUTH ? history.push(RouteName.PUBLIC_LOGIN) : logout();
  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { t } = useTranslation();
  const setThemeName = useContext(ThemeContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <React.Fragment key={'left'}>
                            <MenuIcon onClick={toggleDrawer('left', true)}/>
                            <Drawer anchor={'left'} open={state.left} onClose={toggleDrawer('left', false)}>
                                <Nav page={page}/>
                            </Drawer>
                        </React.Fragment>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {t(ActiveMenuItemName[page])}
                    </Typography>
                    <img className={classes.img} src={ logo } width={'50px'} height={'50px'} alt='Logo'/>
                    {
                        localStorage.getItem('appTheme') === 'darkTheme' ? <Brightness4Icon onClick={() => {
                          setThemeName('lightTheme');
                        }} /> : <Brightness7Icon onClick={() => {
                          setThemeName('darkTheme');
                        }} />
                    }
                    <Button color="inherit" onClick={handleClick}>{authorizationStatus === AuthorizationStatus.AUTH ? `${t(MenuItemText.LOGOUT)}` : `${t(MenuItemText.LOGIN)}`}</Button>
                </Toolbar>
            </AppBar>
        </div>
  );
};

export const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
  darkMode: state[NameSpace.APP].darkMode,
});

export const mapDispatchToProps = (dispatch) => ({
  onDarkModeClick(mode) {
    dispatch(ActionCreator.changeDarkMode(mode));
  },
  logout() {
    dispatch(UserOperation.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
