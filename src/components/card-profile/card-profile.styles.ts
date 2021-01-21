import {createStyles, makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => createStyles({
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
        maxWidth: '250px',
    },
}));
