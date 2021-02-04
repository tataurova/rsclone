import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

type SearchCardType = {
    searchName: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SearchCard = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>{t('Search')}</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{t('Search')}</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <Box>
                            <TextField
                                onChange={props.searchName}
                                id="outlined-full-width"
                                label={t('Name')}
                                style={{ margin: 8 }}
                                placeholder={t('First name Last name')}
                                helperText={t('Enter full name and surname')}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                variant="outlined"/>
                            <Box component='span' mr={2} ml={1}>
                                <TextField
                                    onChange={props.searchAge}
                                    id="outlined-number"
                                    label={t('Age')}
                                    type="number"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    variant="outlined"/>
                            </Box>
                            <TextField
                                onChange={props.searchCity}
                                id="outlined-search"
                                label={t('City')}
                                defaultValue=""
                                type="search"
                                variant="outlined"/>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t('Cancel')}
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        {t('Ok')}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
  );
};
export default SearchCard;
