import * as React from 'react';
import {useEffect, useState} from 'react';
import { defaults, Line } from 'react-chartjs-2';
import { Container, Paper } from '@material-ui/core';
import SelectMonth from '../select/select-month';
import useStyles from './statistics.style';
import Header from '../header/header';
import Footer from '../footer/footer';
import { MonthOfYear, SearchLocationStatus } from '../../const';
import { data } from '../../mock';

defaults.global.legend.position = 'bottom';
const Statistics = () => {
  const styles = useStyles();
  const monthsOfYear = Object.values(MonthOfYear);
  const arrDataLost: Array<string> = [];
  const arrDataFound: Array<string> = [];

    for (let i = 0; i < data.length; i += 1) {
      arrDataLost.push(data[i].missing.slice(3, 5));
      arrDataFound.push(data[i].found.slice(3, 5));
    }
  const numbersOfMonth = {
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
    '05': 0,
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
  }
  const numbersOfMonthWithFoundPeople = { ...numbersOfMonth };
  arrDataLost.forEach((x) => {
    numbersOfMonth[x] = (numbersOfMonth[x] || 0) + 1;
  });
  arrDataFound.forEach((x) => {
    numbersOfMonthWithFoundPeople[x] = (numbersOfMonthWithFoundPeople[x] || 0) + 1;
  });

  const arrPeopleLostInAYear:Array<number> = [];
  const arrPeopleFoundInYear:Array<number> = [];
  for (let i = 1; i <= monthsOfYear.length; i += 1) {
    if (i > 9) {
      arrPeopleLostInAYear.push(numbersOfMonth[i]);
     arrPeopleFoundInYear.push(numbersOfMonthWithFoundPeople[i]);
    } else {
      arrPeopleLostInAYear.push(numbersOfMonth[`0${i}`]);
      arrPeopleFoundInYear.push(numbersOfMonthWithFoundPeople[`0${i}`]);
    }
  }
  const numberOfLostAllPeople = arrPeopleLostInAYear.reduce((a, b) => a + b);
  const numberOfFoundAllPeople = arrPeopleFoundInYear.reduce((a, b) => a + b);
  const [rangeOfYear, setRangeOfYear] = useState({ start: MonthOfYear.january, end: MonthOfYear.december, month: monthsOfYear });
  const [lostPeople, setLostPeople] = useState(arrPeopleLostInAYear);

  const selectMonthRange = (starts: string, monthValue: string) => {
    const monthIndex = monthsOfYear.indexOf(monthValue);
    const startMonthIndex = monthsOfYear.indexOf(rangeOfYear.start);
    const endMonthIndex = monthsOfYear.indexOf(rangeOfYear.end);

    if (starts === SearchLocationStatus.startValue) {
      if (monthIndex < endMonthIndex) {
        const newMonth = monthsOfYear.slice(monthIndex, endMonthIndex + 1);
        const newLostPeople = arrPeopleLostInAYear.slice(monthIndex, endMonthIndex + 1);

        setLostPeople(newLostPeople);
        setRangeOfYear((newRangeOfYear) => ({
          ...newRangeOfYear,
          start: monthValue,
          month: newMonth,
        }));
      }
    }
    if (starts === SearchLocationStatus.endValue) {
      if (monthIndex > startMonthIndex) {
        const newMonth = monthsOfYear.slice(startMonthIndex, monthIndex + 1);
        const newLostPeople = arrPeopleLostInAYear.slice(startMonthIndex, monthIndex + 1);

        setLostPeople(newLostPeople);
        setRangeOfYear((newRangeOfYear) => ({
          ...newRangeOfYear,
          end: monthValue,
          month: newMonth,
        }));
      }
    }
  };

  return (
      <>
        <Header/>
        <Container>
          <div className={styles.wrapper}>
            <span>c</span>
            <SelectMonth
                data={SearchLocationStatus.startValue}
                MonthOfYear={MonthOfYear}
                selectMonthRange={selectMonthRange}
            />
            <span>по</span>
            <SelectMonth
                MonthOfYear={MonthOfYear}
                data={SearchLocationStatus.endValue}
                selectMonthRange={selectMonthRange}
            />
            <span>2020 года</span>
          </div>
          <Paper elevation={3}>
            <Line data={{
              labels: rangeOfYear.month,
              datasets: [
                {
                  label: 'Пропали',
                  data: lostPeople,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                  ],
                  borderWidth: 1,
                  pointBackgroundColor: 'rgb(248,0,53)',
                },
                {
                  label: 'Найдены',
                  data: arrPeopleFoundInYear,
                  backgroundColor: 'rgba(153, 102, 255, 0)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                  pointBackgroundColor: 'rgb(0, 30, 191)',

                },
              ],
            }}
                  height={300}
                  width={500}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                        },
                      }],
                    },
                  }}
            />
          </Paper>
          <div className={styles.bar}>
            <div className={styles.block}>
              <span className={styles.color}> </span>
              <span className={styles.name}>Пропали</span>
              <span className={`${styles.people} + ${styles.colorRed}`}>{numberOfLostAllPeople}</span>
            </div>
            <div className={styles.block}>
              <span className={styles.blue}> </span>
              <span className={styles.name}>Найдены</span>
              <span className={`${styles.people} + ${styles.colorBlue}`}>{numberOfFoundAllPeople}</span>
            </div>
          </div>
        </Container>
        <Footer/>
      </>
  );
};

export default Statistics;