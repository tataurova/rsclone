import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar, Box, Button, Container, Toolbar,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Nav from '../nav/nav';
import { AuthorizationStatus, RouteName } from '../../const';
import NameSpace from '../../reducer/name-space';

interface Props {
    page: string;
    authorizationStatus: string;
}

const Header: React.FunctionComponent<Props> = ({ page, authorizationStatus }: Props) => {
  const history = useHistory();

  function handleClick() {
    history.push(RouteName.LOGIN);
  }
  return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <Nav
                        page={page}
                    />
                    <Box mr={3}>
                        <Button variant="outlined" color="secondary">
                            RU
                        </Button>
                    </Box>
                    <Box mr={3}>
                        <Brightness4Icon/>
                    </Box>
                    <Button variant="contained" color="secondary" onClick={handleClick}>{authorizationStatus === AuthorizationStatus.AUTH ? 'Выйти' : 'Войти'}</Button>
                </Toolbar>
            </Container>
        </AppBar>
  );
};

export const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
});

export default connect(mapStateToProps, null)(Header);
