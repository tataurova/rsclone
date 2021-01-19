import * as React from 'react';
import { useState } from 'react';
import {
  Table, TableHead, TableRow, TablePagination, TableCell, TableSortLabel,
} from '@material-ui/core';
import { Searches, HeadCell } from '../../types';
import useStyles from './use-table.styles';

interface Props {
  searches: Array<Searches>;
  headCells: HeadCell[];
  filterFn: {
    fn: (arg: Searches[]) => Searches[];
  };
}

interface PropsContainer {
  children: React.ReactNode;
}

export function useTable(props: Props) {
  const { searches, headCells, filterFn } = props;
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string | undefined>();

  const TblContainer: React.FunctionComponent<PropsContainer> = (containerProps: PropsContainer) => (
        <Table className={classes.table}>
            {containerProps.children}
        </Table>
  );
  const TblHead = () => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(cellId);
    };

    return (<TableHead>
            <TableRow>
                {
                    headCells.map((headCell, i) => (<TableCell key={i} sortDirection={orderBy === headCell.id
                      ? order
                      : false}>
                        {headCell.disableSorting ? headCell.label
                          : <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => {
                                  handleSortRequest(headCell.id);
                                }}>
                              {headCell.label}
                            </TableSortLabel>
                        }
                      </TableCell>))
                }
            </TableRow>
        </TableHead>);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (<TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={searches.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={'Строк на странице'}
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} из ${count}`}
    />);

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const ordered = comparator(a[0], b[0]);
      if (ordered !== 0) {
        return ordered;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  function descendingComparator(a, b, orderByProperty) {
    if (b[orderByProperty] < a[orderByProperty]) {
      return -1;
    }
    if (b[orderByProperty] > a[orderByProperty]) {
      return 1;
    }
    return 0;
  }

  function getComparator(orderDirection, orderByProp) {
    return orderDirection === 'desc'
      ? (a, b) => descendingComparator(a, b, orderByProp)
      : (a, b) => -descendingComparator(a, b, orderByProp);
  }

  const recordsAfterPagingAndSorting = () => stableSort(filterFn.fn(searches), getComparator(order, orderBy))
    .slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
}
