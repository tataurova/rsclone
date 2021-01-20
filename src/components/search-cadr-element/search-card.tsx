import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';

type SearchCardType = {
    searchName: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SearchCard = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>Поиск</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Поиск</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <Box>
                            <TextField
                                onChange={props.searchName}
                                id="outlined-full-width"
                                label="ФИО"
                                style={{ margin: 8 }}
                                placeholder="Фамилия Имя Отчество"
                                helperText="Введите полное имя и оичество"
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
                                    label="Возраст"
                                    type="number"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    variant="outlined"/>
                            </Box>
                            <TextField
                                onChange={props.searchCity}
                                id="outlined-search"
                                label="Город"
                                defaultValue=""
                                type="search"
                                variant="outlined"/>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
  );
};
export default SearchCard;
