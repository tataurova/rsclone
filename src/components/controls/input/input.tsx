import * as React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  name?: string;
  label: string;
  value?: string;
  error?: null | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps?: {
    startAdornment: React.ReactNode;
  };
}

const Input: React.FunctionComponent<Props> = ({
  name, label, value, error = null, onChange, InputProps, ...other
}: Props) => (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            InputProps={InputProps}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
);

export default Input;
