import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';

type FilterCardType = {
    filterAge: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    filterCity: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FilterCard = (props: FilterCardType) => (
        <form noValidate autoComplete="off">
            <Box>
                <Box mr={3} component='span' >
                <TextField
                    onChange={props.filterAge}
                    color='primary'
                    size='small'
                    id="outlined-number"
                    label="Возраст"
                    type="number"
                    placeholder='30'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                />
            </Box>
                <TextField
                    onChange={props.filterCity}
                    size='small'
                    id="outlined-search"
                    label="Город"
                    defaultValue=""
                    type="search"
                    variant="outlined"/>
            </Box>
        </form>
);

export default FilterCard;
