import * as React from 'react';
import {
  Dialog, DialogTitle, DialogContent, makeStyles, Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ActionButton from '../controls/action-button/action-button';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: '-16px',
  },
  dialogTitle: {
    paddingRight: '0px',
  },
}));

interface Props {
    title: string;
    children: React.ReactNode;
    openPopup: boolean;
    setOpenPopup: (arg: boolean) => void;
}

const Popup: React.FunctionComponent<Props> = ({
  title, children, openPopup, setOpenPopup,
}: Props) => {
  const classes = useStyles();

  return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        color="secondary"
                        onClick={() => { setOpenPopup(false); }}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
  );
};

export default Popup;
