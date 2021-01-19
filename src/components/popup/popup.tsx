import * as React from 'react';
import {
  Dialog, DialogTitle, DialogContent, Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ActionButton from '../controls/action-button/action-button';
import useStyles from './popup.styles';

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
                <div className={classes.titleButtonWrapper}>
                    <Typography variant="h6" component="div" className={classes.header}>
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
