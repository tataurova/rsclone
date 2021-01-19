import { makeStyles } from "@material-ui/core";
import { HOVER_TABLE_COLOR } from '../../const';

export default makeStyles((theme) => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: HOVER_TABLE_COLOR,
            cursor: 'pointer',
        },
    },
}));
