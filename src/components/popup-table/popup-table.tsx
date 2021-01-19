import * as React from 'react';
import {
  TableBody, TableCell, TableRow, Table, TableHead, Typography,
} from '@material-ui/core';
import {
  SearcherStatus, TransportStatus, TransportName, WayStatus,
} from '../../const';
import { Searcher } from '../../types';

interface Props {
    values: Searcher[];
}

const PopupTable: React.FunctionComponent<Props> = ({ values: people }: Props) => (
        <React.Fragment>
        {people && people.length > 0
            && <React.Fragment>
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

export default PopupTable;
