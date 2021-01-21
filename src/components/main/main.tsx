import * as React from 'react';
import {
  Button, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import Footer from '../footer/footer';
import Header from '../header/header';
import useStyles from './main.styles';

interface Props {
    page: string;
}

const Main: React.FunctionComponent<Props> = ({ page }: Props) => {
  const classes = useStyles();

  return (
        <>
            <Header page={page} />
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
                <Footer/>
            </>
  );
};

export default Main;
