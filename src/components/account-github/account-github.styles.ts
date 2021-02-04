import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'flex-end',
        margin: '5px',
    },
    img: {
        width: '20px',
        marginRight: '5px',
    },
    flex: {
        display: 'flex',
    },
    linkColor: {
        color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.54)' : '#ffffff',
    }
}));
