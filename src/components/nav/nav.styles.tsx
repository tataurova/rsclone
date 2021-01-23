import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  lang: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#3f51b5',
  },
}));
