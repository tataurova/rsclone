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
            backgroundColor: theme.palette.type === 'light' ? HOVER_TABLE_COLOR : 'rgba(255, 255, 255, 0.08)',
            cursor: 'pointer',
        },
    },
}));


