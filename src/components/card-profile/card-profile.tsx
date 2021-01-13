import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Box, ListSubheader } from '@material-ui/core';
import { CardType } from '../search-gone/search-gone-profile';

const useStyles = makeStyles(() => createStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  values: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'end',
    width: '250px',
  },
}),);

const CardProfile = (props: CardType) => {
  const classes = useStyles();

  return (

        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}
                />
                <CardContent>
                    <Box>
                        <Typography variant="h6">
                            {props.name}
                        </Typography>
                        <div>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Город</ListSubheader>}>
                                <ListItemText primary={props.city}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Год рождения</ListSubheader>}>
                                <ListItemText primary={props.birth}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Количество лет</ListSubheader>}>
                                <ListItemText primary={props.age}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Дата пропажи</ListSubheader>}>
                                <ListItemText primary={props.missing}/>
                            </List>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Приметы</ListSubheader>}/>
                            <Box width="100%">
                                {props.sign}
                            </Box>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Одежда</ListSubheader>}/>
                            <Box>
                                {props.close}
                            </Box>
                            <List className={classes.values}
                                  subheader={<ListSubheader>Было с cобой</ListSubheader>}/>
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
