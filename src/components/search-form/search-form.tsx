import * as React from 'react';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Controls from '../controls/controls';
import Form, { useForm } from '../use-form/use-form';
import PopupTable from '../popup-table/popup-table';
import { statusSelectItems, FORM_FIELDS } from '../../const';
import { helperForTranslate } from '../../utils/common';
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
  const { t } = useTranslation();

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
                            label={t('City')}
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                            error={errors.city}
                        />
                        <Controls.Input
                            label={t('Name')}
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                        <Controls.Input
                            label={t('Age')}
                            name="age"
                            value={values.age}
                            onChange={handleInputChange}
                            error={errors.age}
                        />
                        <div>
                            <Controls.Button
                                type="submit"
                                text={'Submit'} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Input
                            label={t('Coordinator')}
                            name="coordinator"
                            value={values.coordinator}
                            onChange={handleInputChange}
                            error={errors.coordinator}
                        />
                        <Controls.Select
                            label={t('Status')}
                            name="status"
                            value={t(helperForTranslate(values.status))}
                            onChange={handleInputChange}
                            options={statusSelectItems}
                            error={errors.status}
                        />
                        <Controls.DatePicker
                            label={'Date'}
                            name="date"
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
