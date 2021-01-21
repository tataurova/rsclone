import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    },
}));
