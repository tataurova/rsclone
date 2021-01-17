import * as React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ActionCreator } from '../../reducer/app/app';
import { PageName } from '../../const';
import NameSpace from '../../reducer/name-space';

interface Props {
    onMenuClick: (...args: any[]) => void;
    page: string;
}

const Nav: React.FunctionComponent<Props> = ({ onMenuClick, page }: Props) => {
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
      <div>
          <Tabs value={page}>
              <Tab label='Главная' value="0" onClick={() => { handleClick(PageName.MAIN); onMenuClick('0'); }}/>
              <Tab label='Пропали' value="1" onClick={() => { handleClick(PageName.GONE); onMenuClick('1'); }}/>
              <Tab label='Ищут родственников' value="2" onClick={() => { handleClick(PageName.LOOKING_RELATIVES); onMenuClick('2'); }}/>
              <Tab label='Активные поиски' value="3" onClick={() => { handleClick(PageName.ACTIVE_SEARCHES); onMenuClick('3'); }}/>
              <Tab label='Закрытые поиски' value="4" onClick={() => { handleClick(PageName.CLOSED_SEARCHES); onMenuClick('4'); }}/>
          </Tabs>
      </div>
  );
};

export const mapStateToProps = (state) => ({
  page: state[NameSpace.APP].page,
});

export const mapDispatchToProps = (dispatch) => ({
  onMenuClick(page) {
    dispatch(ActionCreator.changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
