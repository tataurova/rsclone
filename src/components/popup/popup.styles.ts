import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: '-16px',
    },
    dialogTitle: {
        paddingRight: '0px',
    },
    titleButtonWrapper: {
        display: 'flex',
    },
    header: {
        flexGrow: 1,
    }
}));
