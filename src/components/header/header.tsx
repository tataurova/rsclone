import * as React from 'react';
import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../nav/nav';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <Typography className={classes.menuButton}>Logo</Typography>
                    <Nav/>
                    <Box mr={3}>
                        <Button variant="outlined" color="secondary">
                            RU
                        </Button>
                    </Box>
                    <Box mr={3}>
                        <Brightness4Icon/>
                    </Box>
                    <Button variant="contained" color="secondary">Log in</Button>
                </Toolbar>
            </Container>
        </AppBar>
  );
};

export default Header;
