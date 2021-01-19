import * as React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { format } from 'date-fns';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { NOT_HOME_PLACES } from '../../const';
import ActionButton from '../controls/action-button/action-button';
import { Searches } from '../../types';

interface Props {
    recordsAfterPagingAndSorting: () => Searches[];
    openInPopup: (arg: Searches) => void;
}

const SearchesTableBody: React.FunctionComponent<Props> = ({ recordsAfterPagingAndSorting, openInPopup }: Props) => (
        <TableBody>
            {
                recordsAfterPagingAndSorting().map((item, i) => {
                  const {
                    status, city, name, age, date, coordinator, people,
                  } = item;
                  const isNotAtHome = (el) => NOT_HOME_PLACES.includes(el.status);
                  return (
                        <TableRow key={i}>
                            <TableCell>{status}</TableCell>
                            <TableCell>{city}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{age}</TableCell>
                            <TableCell>{format(new Date(date), 'dd-MM-yyyy')}</TableCell>
                            <TableCell>{coordinator}</TableCell>
                            <TableCell>{people.length > 0 && people.filter((men) => isNotAtHome(men)).length}</TableCell>
                            <TableCell>
                                <ActionButton
                                    color ={'primary'}
                                    onClick={() => openInPopup(item)}>
                                    <EditOutlinedIcon fontSize={'small'} />
                                </ActionButton>
                            </TableCell>
                        </TableRow>
                  );
                })
            }
        </TableBody>
);

export default SearchesTableBody;
