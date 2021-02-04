import * as React from 'react';
import { useState } from 'react';
import {
  Box, Toolbar, InputAdornment,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './active-searches-page.styles';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useTable } from '../use-table/use-table';
import {
  headCells, SearchStatusName, PageName,
} from '../../const';
import Input from '../controls/input/input';
import Button from '../controls/button/button';
import Popup from '../popup/popup';
import SearchForm from '../search-form/search-form';
import NameSpace from '../../reducer/name-space';
import { Searches } from '../../types';
import { ActionCreator } from '../../reducer/data/data';
import SearchesTableBody from '../active-searches-page-table/active-searches-page-table';

const createFullRecord = (data, id) => {
  data.id = id;
  data.people = [];
  return data;
};

const updateRecord = (data, activeSearches, closedSearches) => {
  const allRecords = [...activeSearches, ...closedSearches];
  const index = allRecords.findIndex(({ id }) => id === data.id);
  allRecords[index] = { ...data };
  activeSearches = allRecords.filter(({ status }) => status !== SearchStatusName.ARCHIVE);
  closedSearches = allRecords.filter(({ status }) => status === SearchStatusName.ARCHIVE);
  return {
    active: activeSearches,
    closed: closedSearches,
  };
};

const filterSearches = ({
  name, city, status, coordinator,
}, value) => name.toLowerCase().includes(value)
    || city.toLowerCase().includes(value)
    || status.toLowerCase().includes(value)
    || coordinator.toLowerCase().includes(value);

interface Props {
    page: string;
    activeSearches: Searches[];
    closedSearches: Searches[];
    onAddActiveSearches: (arg: Searches[]) => void;
    onAddClosedSearches: (arg: Searches[]) => void;
}

const ActiveSearchesPage: React.FunctionComponent<Props> = ({
  page, activeSearches, closedSearches, onAddActiveSearches, onAddClosedSearches,
}: Props) => {
  const classes = useStyles();
  const searches = page === PageName.CLOSED_SEARCHES ? closedSearches : activeSearches;

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [openPopup, setOpenPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('Adding a search');
  const { t } = useTranslation();

  const {
    TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting,
  } = useTable({ searches, headCells, filterFn });

  const handleSearch = (evt) => {
    const { target: { value } } = evt;
    setFilterFn({
      fn: (items) => {
        if (value === '') {
          return items;
        }
        return items.filter((el) => filterSearches(el, value));
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      if (employee.status === SearchStatusName.ARCHIVE) {
        closedSearches.push(createFullRecord(employee, closedSearches.length));
        onAddClosedSearches(closedSearches);
      } else {
        activeSearches.push(createFullRecord(employee, activeSearches.length));
        onAddActiveSearches(activeSearches);
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
    setTitlePopup('Changing the search');
  };

  return (
        <React.Fragment>
            <Header
                page={page}
            />
            <Box className={classes.root}>
                {page !== PageName.CLOSED_SEARCHES && <Toolbar className={classes.height}>
                    <Input
                        label={t('Search')}
                        onChange={(evt) => handleSearch(evt)}
                        InputProps={{
                          startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>),
                        }}
                        />
                        <Button
                            text={t('Add')}
                            variant={'outlined'}
                            startIcon={<AddIcon />}
                            className={classes.newButton}
                            onClick={() => {
                              setOpenPopup(true); setRecordForEdit(null); setTitlePopup('Adding a search');
                            }}
                        />
                </Toolbar>}
                <TblContainer>
                    <TblHead />
                    <SearchesTableBody
                        recordsAfterPagingAndSorting={recordsAfterPagingAndSorting}
                        openInPopup={openInPopup}
                    />
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
        </React.Fragment>
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
