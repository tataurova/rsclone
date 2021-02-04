import * as React from 'react';
import {
  FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Props {
    name: string;
    label: string;
    value: string;
    error: null | string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options: string[];
}

const Select: React.FunctionComponent<Props> = ({
  name, label, value, error = null, onChange, options,
}: Props) => {
  const { t } = useTranslation();

  return (
        <FormControl variant="outlined"
                     {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={t(value)}
                onChange={onChange}>
                {
                    options.map((item, index) => (<MenuItem key={index} value={t(item)}>{t(item)}</MenuItem>))
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
  );
};

export default Select;
