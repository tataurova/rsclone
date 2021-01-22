import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Box, ListSubheader } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { CardType } from '../search-gone/search-gone-profile';
import useStyles from './card-profile.styles';

const CardProfile = (props: CardType) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}/>
                <CardContent>
                    <Box>
                        <Typography variant="h6">
                            {props.name}
                        </Typography>
                        <div>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('City')}</ListSubheader>}>
                                <ListItemText primary={props.city}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Year of birth')}</ListSubheader>}>
                                <ListItemText primary={props.birth}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Age')}</ListSubheader>}>
                                <ListItemText primary={props.age}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Date of loss')}</ListSubheader>}>
                                <ListItemText primary={props.missing}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Signs')}</ListSubheader>}/>
                            <Box width="100%">
                                {props.sign}
                            </Box>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Clothes')}</ListSubheader>}/>
                            <Box>
                                {props.close}
                            </Box>
                            <List className={classes.values}
                                  subheader={<ListSubheader>{t('Had taken')}</ListSubheader>}/>
                            <Box>
                                {props.with}
                            </Box>
                        </div>
                    </Box>

                </CardContent>
            </Card>
        </Grid>
  );
};

export default CardProfile;
