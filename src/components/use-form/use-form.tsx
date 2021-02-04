import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({
    city: '',
    name: '',
    age: '',
    coordinator: '',
    status: '',
    date: new Date(),
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors(
      {
        city: '',
        name: '',
        age: '',
        coordinator: '',
        status: '',
        date: new Date(),
      },
    );
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FunctionComponent<Props> = (props: Props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
        <form className={classes.root} autoComplete="off" {...other}>
            {children}
        </form>
  );
};

export default Form;
