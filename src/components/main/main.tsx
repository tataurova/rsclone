import * as React from 'react';
import {
  Button, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Footer from '../footer/footer';
import Header from '../header/header';
import useStyles from './main.styles';

interface Props {
    page: string;
}

const Main: React.FunctionComponent<Props> = ({ page }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
                                    >{t('If you get lost in the woods')}</Typography>
                                    <Typography
                                        variant='h5'
                                        color='inherit'
                                        paragraph
                                    >{t('If you get lost in the forest and do not see suitable landmarks, it is best to go out on the water and move downstream. The stream will definitely lead to the river, the river - to the people. If you get lost and know that you will be searched for, stay in one place and make a fire so the search engines will be easier to navigate.')}
                                    </Typography>
                                    <Button variant='contained' color='secondary'>
                                        <a className={classes.link}>{t('Leave a request')}</a>
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
                                    >{t('Rules of behavior of the child, if he is lost')}</Typography>
                                    <Typography
                                        variant='h5'
                                        color='inherit'
                                        paragraph
                                    >
                                        {t('If the child realized that he was left alone, but his mother was just there, you need to call her loudly. The most important rule that you need to teach your baby do not agree to the suggestions of strangers to go look for parents. However, it is important that the child can ask for help from the seller, representatives of the security service or the police')}
                                    </Typography>
                                    <Button variant='contained' color='secondary'>
                                        <a className={classes.link}>{t('Leave a request')}</a>
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
                                    >{t('Rules that will help the elderly')}</Typography>
                                    <Typography
                                        variant='h5'
                                        color='inherit'
                                        paragraph
                                    >
                                        {t('If a person has problems with orientation and sense of space, they should always have identification documents or a special bracelet with their name and address engraved on it. Before leaving, a person should warn where he is going and when he will return approximately. You need to take your phone with you and put it in your inner pocket. When an elderly person has a phone with them, it is possible to keep in touch with them or track their location using a GPS signal.')}
                                    </Typography>
                                    <Button variant='contained' color='secondary'>
                                        <a className={classes.link}>{t('Leave a request')}</a>
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
