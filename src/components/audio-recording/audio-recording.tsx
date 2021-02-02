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
import { connect } from 'react-redux';
import useRecorder from './useRecorder';
import NameSpace from '../../reducer/name-space';
import { Operation as DataOperation } from '../../reducer/data/data';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  addRecord: {
    margin: '8px',
  }
}));

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

const AudioRecording = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  return (
      <>
        <Button className={classes.addRecord} variant="outlined" color="primary" onClick={handleClickOpen}>
          {t('Add voice recording')}
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {t('Voice recording')}
              </Typography>
              <Button autoFocus color="inherit">
                {t('Save')}
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
                  {t('Recording')}
                </Button>
                <Button
                    onClick={stopRecording}
                    disabled={!isRecording}
                    variant="contained"
                    color="primary">
                  {t('Stop')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </>
  );
};

export const mapStateToProps = (state) => ({
  audio: state[NameSpace.AUTH].audio,
});
  
export const mapDispatchToProps = (dispatch) => ({
  loadRecordingAudio(audio) {
    dispatch(DataOperation.loadRecordingAudio(audio));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecording);
