import * as React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ActionCreator } from '../../reducer/app/app';
import { RouteName, PageName } from '../../const';
import NameSpace from '../../reducer/name-space';

interface Props {
    onMenuClick: (arg: string) => void;
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
              <Tab label='Главная' value={PageName.MAIN} onClick={() => { handleClick(RouteName.MAIN); onMenuClick(PageName.MAIN); }}/>
              <Tab label='Пропали' value={PageName.GONE} onClick={() => { handleClick(RouteName.GONE); onMenuClick(PageName.GONE); }}/>
              <Tab label='Ищут родственников' value={PageName.LOOKING_RELATIVES} onClick={() => { handleClick(RouteName.LOOKING_RELATIVES); onMenuClick(PageName.LOOKING_RELATIVES); }}/>
              <Tab label='Активные поиски' value={PageName.ACTIVE_SEARCHES} onClick={() => { handleClick(RouteName.ACTIVE_SEARCHES); onMenuClick(PageName.ACTIVE_SEARCHES); }}/>
              <Tab label='Закрытые поиски' value={PageName.CLOSED_SEARCHES} onClick={() => { handleClick(RouteName.CLOSED_SEARCHES); onMenuClick(PageName.CLOSED_SEARCHES); }}/>
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
