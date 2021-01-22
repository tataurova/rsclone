import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

type FilterCardType = {
    filterAge: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    filterCity: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FilterCard = (props: FilterCardType) => {
  const { t } = useTranslation();

  return (
        <form noValidate autoComplete="off">
            <Box>
                <Box mr={3} component='span' >
                    <TextField
                        onChange={props.filterAge}
                        color='primary'
                        size='small'
                        id="outlined-number"
                        label={t('Age')}
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
                    label={t('City')}
                    defaultValue=""
                    type="search"
                    variant="outlined"/>
            </Box>
        </form>
  );
};

export default FilterCard;
