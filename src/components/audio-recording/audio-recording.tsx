import * as React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Box, Dialog } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import useRecorder from './useRecorder';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

const AudioRecording = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Дабавить запись голоса
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Запись голоса
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Сохранить
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box mt={3}
                     display='flex'
                     justifyContent="center">
                    <Box>
                        <audio src={audioURL} controls/>
                        <Box
                            display="flex"
                            mt={3}
                            p={2}>
                            <Button

                                variant="contained"
                                color="secondary"
                                startIcon={<KeyboardVoiceIcon/>}
                                onClick={startRecording}
                                disabled={isRecording}>
                                Запись
                            </Button>
                            <Button
                                onClick={stopRecording}
                                disabled={!isRecording}
                                variant="contained"
                                color="primary">
                                Остановить
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
  );
};

export default AudioRecording;
