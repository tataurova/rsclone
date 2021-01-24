import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    img: {
        position: 'absolute',
        left: 'calc(50% - 25px)',
    }
}));
