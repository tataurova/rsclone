import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar, Box, Button, Container, Toolbar,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Nav from '../nav/nav';
import { RouteName } from '../../const';

interface Props {
    page: string;
}

const Header: React.FunctionComponent<Props> = ({ page }: Props) => {
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
                    <Button variant="contained" color="secondary" onClick={handleClick}>Log in</Button>
                </Toolbar>
            </Container>
        </AppBar>
  );
};

export default Header;
