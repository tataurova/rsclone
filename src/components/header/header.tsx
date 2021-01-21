import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Button, Toolbar,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import NameSpace from '../../reducer/name-space';
import {
  AuthorizationStatus, RouteName, MenuItemText, ActiveMenuItemName,
} from '../../const';
import Nav from '../nav/nav';
import useStyles from './header.styles';

interface Props {
    page: string;
    authorizationStatus: string;
}

const Header: React.FunctionComponent<Props> = ({ page, authorizationStatus }: Props) => {
  const classes = useStyles();
  const history = useHistory();
  function handleClick() {
    history.push(RouteName.LOGIN);
  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
                        {ActiveMenuItemName[page]}
                    </Typography>
                    <Button color="inherit" onClick={handleClick}>{authorizationStatus === AuthorizationStatus.AUTH ? MenuItemText.EXIT : MenuItemText.ENTER}</Button>
                </Toolbar>
            </AppBar>
        </div>
  );
};

export const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
});

export default connect(mapStateToProps, null)(Header);
