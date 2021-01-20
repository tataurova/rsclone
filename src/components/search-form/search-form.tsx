import * as React from 'react';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../controls/controls';
import Form, { useForm } from '../use-form/use-form';
import PopupTable from '../popup-table/popup-table';
import { getStatusCollection, FORM_FIELDS } from '../../const';
import { Searches } from '../../types';

const initialFValues = {
  id: 0,
  city: '',
  name: '',
  age: '',
  coordinator: '',
  status: '',
  date: new Date(),
};

interface Props {
    addOrEdit: (...args: (Searches | (() => void))[]) => void;
    recordForEdit: (args: Searches) => void;
}

const SearchForm: React.FunctionComponent<Props> = ({ addOrEdit, recordForEdit }: Props) => {
  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    FORM_FIELDS.forEach((field) => {
      if (field in fieldValues) {
        temp[field] = fieldValues[field] ? '' : 'This field is required';
      }
    });

    setErrors({
      ...temp,
    });

    if (fieldValues === values) {
      return Object.values(temp).slice(0, -1).every((value) => value === '');
    }
    return false;
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit !== null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);

  return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                            label="Город"
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                            error={errors.city}
                        />
                        <Controls.Input
                            label="ФИО"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                        <Controls.Input
                            label="Возраст"
                            name="age"
                            value={values.age}
                            onChange={handleInputChange}
                            error={errors.age}
                        />
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Применить" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Input
                            label="Координатор"
                            name="coordinator"
                            value={values.coordinator}
                            onChange={handleInputChange}
                            error={errors.coordinator}
                        />
                        <Controls.Select
                            label="Статус"
                            name="status"
                            value={values.status}
                            onChange={handleInputChange}
                            options={getStatusCollection}
                            error={errors.status}
                        />
                        <Controls.DatePicker
                            name="date"
                            label="Дата"
                            value={values.date}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </Form>
            <PopupTable
                values={values}
            />
        </>
  );
};

export default SearchForm;
