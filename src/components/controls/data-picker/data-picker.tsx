import * as React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface Props {
    name: string;
    label: string;
    value: string | Date;
    onChange: (evt: { target: { name: keyof Props ; value: string } } | React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FunctionComponent<Props> = ({
  name, label, value, onChange,
}: Props) => {
  const convertToDefEventPara = (changedName, changedValue) => ({
    target: {
      name: changedName,
      value: changedValue,
    },
  });

  return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                                label={label}
                                format="dd-MM-yyyy"
                                name={name}
                                value={value}
                                onChange={(date) => onChange(convertToDefEventPara(name, date))}
            />
        </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
