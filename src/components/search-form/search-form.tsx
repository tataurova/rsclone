import * as React from 'react';
import { useEffect } from 'react';
import {
  Grid, TableBody, TableCell, TableRow, Table, TableHead, Typography,
} from '@material-ui/core';
import { format } from 'date-fns';
import Controls from '../controls/controls';
import Form, { useForm } from '../use-form/use-form';

import { getStatusCollection, SearcherStatus, TransportStatus } from '../../const';

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
    addOrEdit: (...args: any[]) => void;
    recordForEdit: (...args: any[]) => void;
}

const SearchForm: React.FunctionComponent<Props> = ({ addOrEdit, recordForEdit }: Props) => {
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ('city' in fieldValues) temp.city = fieldValues.city ? '' : 'This field is required';
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'This field is required';
    if ('age' in fieldValues) temp.age = fieldValues.age ? '' : 'This field is required';
    if ('coordinator' in fieldValues) temp.coordinator = fieldValues.coordinator ? '' : 'This field is required';
    if ('status' in fieldValues) temp.status = fieldValues.status.length !== 0 ? '' : 'This field is required';
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).slice(0, -1).every((value) => value === '');
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
      const getUTCDate = (dateString = values.date) => {
        const date = new Date(dateString);

        return new Date(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate(),
          date.getUTCHours(),
          date.getUTCMinutes(),
          date.getUTCSeconds(),
        );
      };
      values.date = format(getUTCDate(), 'dd-MM-yyyy');
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null) {
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
            {values.people && values.people.length > 0 && <>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                {'Статус поисковиков'}
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Транспорт</TableCell>
                        <TableCell>Места в машине</TableCell>
                        <TableCell>Район выезда</TableCell>
                        <TableCell>Время прибытия</TableCell>
                    </TableRow>
                </TableHead>
        <TableBody>
            {values.people.map((men, i) => (<TableRow key={i}>
                        <TableCell>{men.name}</TableCell>
                        <TableCell>{SearcherStatus[men.status]}</TableCell>
                        <TableCell>{men.transport === 'car' && TransportStatus[men.transport]}</TableCell>
                        <TableCell>{men.transport === 'car' && men.places}</TableCell>
                        <TableCell>{men.district}</TableCell>
                        <TableCell>{men.status === 'way' && men.time}</TableCell>
                    </TableRow>
            ))
            }
        </TableBody>
            </Table>
                </>}
            </>
  );
};

export default SearchForm;
