import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

const FilterCard = () => (
        <form noValidate autoComplete="off">
            <Box>
                <TextField id="outlined-search" label="ФИО" type="search" variant="outlined"/>
                <TextField
                    id="outlined-number"
                    label="Возраст"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField id="outlined-search" label="Город" type="search" variant="outlined"/>

            </Box>
        </form>
);
export default FilterCard;
