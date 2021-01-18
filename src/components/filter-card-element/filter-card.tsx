import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

const FilterCard = () => (
        <form noValidate autoComplete="off">
            <Box>
                {/*<TextField*/}
                {/*    defaultValue="ФИО"*/}
                {/*    id="outlined-search"*/}
                {/*    label="ФИО"*/}
                {/*    type="search"*/}

                {/*    variant="outlined"*/}
                {/*/>*/}
                <Box mr={3} component='span' >
                <TextField
                    color='primary'
                    size='small'
                    id="outlined-number"
                    label="Возраст"
                    type="number"
                    placeholder='30-35'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                />
            </Box>
                <TextField
                    size='small'

                    id="outlined-search"
                    label="Город"
                    defaultValue=" "
                    type="search"
                    variant="outlined"/>

            </Box>
        </form>
);
export default FilterCard;
