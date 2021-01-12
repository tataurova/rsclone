import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../nav/nav';
import { PageName } from '../../const';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(PageName.LOGIN);
  }
  return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <Link to={PageName.MAIN}>
                        <Typography className={classes.menuButton}>Logo</Typography>
                    </Link>
                    <Nav/>
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
