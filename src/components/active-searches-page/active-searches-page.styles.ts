import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        overflowX: 'scroll',
        width: '100vw',
    },
    searchInput: {
        width: '75%',
    },
    newButton: {
        position: 'absolute',
        right: '10px',
        color: theme.palette.type === 'light' ? '#4167B2' : '#ffffff',
    },
    height: {
        minHeight: '65px',
    }
}));
