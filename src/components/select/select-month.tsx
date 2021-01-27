import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  FormControl, InputLabel, MenuItem, Select, Theme,
} from '@material-ui/core';
import { SearchLocationStatus } from '../../const';
import { useTranslation } from 'react-i18next';

interface Props {
  MonthOfYear: { [key: string]: string };
  data: string;
  selectMonthRange: (starts: string, monthValue: string) => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}),);

const SelectMonth: React.FunctionComponent<Props> = ({ MonthOfYear, data, selectMonthRange }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const monthSelectValue = (e) => {
    const valueMonth = e
      .currentTarget
      .textContent
      .toLocaleLowerCase();
    if (e.currentTarget.dataset.start === SearchLocationStatus.startValue) {
      selectMonthRange(SearchLocationStatus.startValue, valueMonth);
    }
    if (e.currentTarget.dataset.start === SearchLocationStatus.endValue) {
      selectMonthRange(SearchLocationStatus.endValue, valueMonth);
    }
  };
  const month = Object.keys(MonthOfYear);
  const options = month.map((m) => <MenuItem key={m} data-start={data} value={`${t(m)}`}>{t(MonthOfYear[m])}</MenuItem>);

  return (
      <>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">{t('Month')}</InputLabel>
          <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={monthSelectValue}
              label={t('Month')}
          >
            <MenuItem>
              <em>{t('Month')}</em>
            </MenuItem>
            {options}
          </Select>
        </FormControl>
      </>
  );
};

export default SelectMonth;
