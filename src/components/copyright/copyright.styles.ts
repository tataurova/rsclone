import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    linkFont: {
        fontSize: '1rem',
    }
}));
