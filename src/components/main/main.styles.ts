import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
