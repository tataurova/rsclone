import * as React from 'react';
import { useState } from 'react';
import {
  TableBody, TableRow, TableCell, Box, Toolbar, InputAdornment,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { connect } from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useTable } from '../use-table/use-table';
import { headCells } from '../../const';
import Input from '../controls/input/input';
import Button from '../controls/button/button';
import ActionButton from '../controls/action-button/action-button';
import Popup from '../popup/popup';
import SearchForm from '../search-form/search-form';
import NameSpace from '../../reducer/name-space';
import { Searches } from '../../types';
import { ActionCreator } from '../../reducer/data/data';

const addRecord = (data, dataArray) => {
  data.id = dataArray.length;
  data.people = [];
  dataArray.push(data);
  return dataArray;
};

const updateRecord = (data, activeSearches, closedSearches) => {
  const allRecords = [...activeSearches, ...closedSearches];
  const index = allRecords.findIndex((record) => record.id === data.id);
  allRecords[index] = { ...data };
  activeSearches = allRecords.filter((el) => el.status !== 'Архив');
  closedSearches = allRecords.filter((el) => el.status === 'Архив');
  return {
    active: activeSearches,
    closed: closedSearches,
  };
};

const filterFoo = (obj, value) => obj.name.toLowerCase().includes(value)
        || obj.city.toLowerCase().includes(value)
        || obj.status.toLowerCase().includes(value)
        || obj.coordinator.toLowerCase().includes(value);

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '100px',
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));

interface Props {
    page: string;
    activeSearches: Searches[];
    closedSearches: Searches[];
    onAddActiveSearches: (...args: any[]) => void;
    onAddClosedSearches: (...args: any[]) => void;
}

const ActiveSearchesPage: React.FunctionComponent<Props> = ({
  page, activeSearches, closedSearches, onAddActiveSearches, onAddClosedSearches,
}: Props) => {
  const classes = useStyles();
  const searches = page === '4' ? closedSearches : activeSearches;

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [openPopup, setOpenPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('Добавление поиска');

  const {
    TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting,
  } = useTable({ searches, headCells, filterFn });

  const handleSearch = (evt) => {
    const { target } = evt;
    setFilterFn({
      fn: (items) => {
        if (target.value === '') {
          return items;
        }
        return items.filter((el) => filterFoo(el, target.value));
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      if (employee.status === 'Архив') {
        onAddClosedSearches(addRecord(employee, closedSearches));
      } else {
        onAddActiveSearches(addRecord(employee, activeSearches));
      }
    } else {
      const allSearches = updateRecord(employee, activeSearches, closedSearches);
      onAddActiveSearches(allSearches.active);
      onAddClosedSearches(allSearches.closed);
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
    }
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
    setTitlePopup('Изменение поиска');
  };

  return (
        <>
            <Header
                page={page}
            />
            <Box className={classes.root}>
                {page !== '4' && <Toolbar>
                    <Input
                        label={'Поиск'}
                        // className={classes.searchInput}
                        onChange={(evt) => handleSearch(evt)}
                        InputProps={{
                          startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>),
                        }}
                        />
                        <Button
                            text={'Добавить'}
                            variant={'outlined'}
                            startIcon={<AddIcon />}
                            className={classes.newButton}
                            onClick={() => {
                              setOpenPopup(true); setRecordForEdit(null); setTitlePopup('Добавление поиска');
                            }}
                        />
                </Toolbar>}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item, i) => (<TableRow key={i}>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{typeof item.date !== 'string' ? item.date.toString() : item.date}</TableCell>
                                <TableCell>{item.coordinator}</TableCell>
                                <TableCell>{item.people.length > 0 && item.people.filter((el) => el.status === 'place' || el.status === 'way').length}</TableCell>
                                <TableCell>
                                    <ActionButton
                                        color ={'primary'}
                                        onClick={() => openInPopup(item)}>
                                        <EditOutlinedIcon fontSize={'small'} />
                                    </ActionButton>
                                </TableCell>
                            </TableRow>
                            ))
                    }
                    </TableBody>
                </TblContainer>
                <TblPagination />
                <Popup
                    title={titlePopup}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <SearchForm
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
                    />
                </Popup>
            </Box>
            <Footer />
        </>
  );
};

export const mapStateToProps = (state) => ({
  page: state[NameSpace.APP].page,
  activeSearches: state[NameSpace.DATA].activeSearches,
  closedSearches: state[NameSpace.DATA].closedSearches,
});

export const mapDispatchToProps = (dispatch) => ({
  onAddActiveSearches(searches) {
    dispatch(ActionCreator.onAddActiveSearches(searches));
  },
  onAddClosedSearches(searches) {
    dispatch(ActionCreator.onAddClosedSearches(searches));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSearchesPage);
