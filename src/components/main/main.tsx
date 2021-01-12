import * as React from 'react';
import {
  Button, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer';
import Header from '../header/header';

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

const Main = () => {
  const classes = useStyles();

  return (
        <>
            <Header />
            <main>
                <Paper className={classes.mainSectionPost}
                       style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
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
                       style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
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
                       style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
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

export default Main;
