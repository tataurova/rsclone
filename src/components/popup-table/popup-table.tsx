import * as React from 'react';
import {
  TableBody, TableCell, TableRow, Table, TableHead, Typography,
} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import {
  SearcherStatus, TransportStatus, TransportName, WayStatus,
} from '../../const';
import { Searcher } from '../../types';

interface Props {
    values: { people: Searcher[] };
}

const PopupTable: React.FunctionComponent<Props> = ({ values: { people } }: Props) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            {people && people.length > 0
            && <React.Fragment>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                    {t('The status of the searchers')}
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('Name')}</TableCell>
                            <TableCell>{t('Status')}</TableCell>
                            <TableCell>{t('Transport')}</TableCell>
                            <TableCell>{t('Seats in the car')}</TableCell>
                            <TableCell>{t('District of departure')}</TableCell>
                            <TableCell>{t('Arrival time')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people.map((men, i) => {
                            const {
                                name, status, transport, places, district, time,
                            } = men;
                            return (<TableRow key={i}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{SearcherStatus[status]}</TableCell>
                                    <TableCell>{transport === TransportName.CAR && TransportStatus[transport]}</TableCell>
                                    <TableCell>{transport === TransportName.CAR && places}</TableCell>
                                    <TableCell>{district}</TableCell>
                                    <TableCell>{status === WayStatus.WAY && time}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </React.Fragment>
            }
        </React.Fragment>);
}

export default PopupTable;
