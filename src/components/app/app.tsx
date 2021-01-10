import React from 'react';
import '../../../style/normalize.css';
import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Container, Grid,
  Link,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Footer from '../footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
  mainSectionPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginTop: theme.spacing(8),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainSectionPostContent: {
    position: 'relative',
    padding: theme.spacing(9),

  },

}));

const App = () => {
  const classes = useStyles();
  return (
      <>
        <AppBar position='fixed'>
          <Container fixed>
            <Toolbar>
              <Typography className={classes.menuButton}>Logo</Typography>
              <Breadcrumbs aria-label="breadcrumb" className={classes.menuButton}>
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
              <Box mr={3}>
                <Button variant="outlined" color="inherit">Ru/En</Button>
              </Box>
              <Box mr={3}>
                <Button variant="contained" color="secondary">Log in</Button>
              </Box>
              <Button variant="contained" color="secondary">Dark/Light</Button>

            </Toolbar>

          </Container>
        </AppBar>
        <main>
          <Paper className={classes.mainSectionPost}
                 style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <Container fixed>

              <Grid container>
                <Grid item md={8}>

                  <div className={classes.mainSectionPostContent}>

                    <Typography
                        component='h1'
                        variant='h3'
                        color='inherit'
                        gutterBottom
                    >Пропали</Typography>
                    <Typography
                        variant='h5'
                        color='inherit'
                        paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad beatae
                      cum ducimus earum
                      fugiat illo impedit, incidunt inventore iure
                      maxime modi odit quibusdam quidem,
                      quisquam
                      reprehenderit, velit vero vitae?
                    </Typography>
                    <Button variant='contained' color='secondary'>
                      Button
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
          <Paper className={classes.mainSectionPost}
                 style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <Container fixed>

              <Grid container>
                <Grid item md={8}>

                  <div className={classes.mainSectionPostContent}>

                    <Typography
                        component='h1'
                        variant='h3'
                        color='inherit'
                        gutterBottom
                    >Ищут родственников</Typography>
                    <Typography
                        variant='h5'
                        color='inherit'
                        paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad beatae
                      cum ducimus earum
                      fugiat illo impedit, incidunt inventore iure maxime modi
                      odit quibusdam quidem,
                      quisquam
                      reprehenderit, velit vero vitae?
                    </Typography>
                    <Button variant='contained' color='secondary'>
                      Button
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
          <Paper className={classes.mainSectionPost}
                 style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <Container fixed>

              <Grid container>
                <Grid item md={8}>

                  <div className={classes.mainSectionPostContent}>

                    <Typography
                        component='h1'
                        variant='h3'
                        color='inherit'
                        gutterBottom
                    >Активные поиски</Typography>
                    <Typography
                        variant='h5'
                        color='inherit'
                        paragraph
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad beatae
                      cum ducimus earum
                      fugiat illo impedit, incidunt inventore iure maxime modi
                      odit quibusdam quidem,
                      quisquam
                      reprehenderit, velit vero vitae?
                    </Typography>
                    <Button variant='contained' color='secondary'>
                      Button
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
  );
};

export default App;
