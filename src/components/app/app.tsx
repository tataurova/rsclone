import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import LoginPage from '../login/login';
import { PageName } from '../../const';
import SearchingProfile from '../search-gone/search-gone-profile';
import ActiveSearchesPage from '../active-searches-page/active-searches-page';
import { ActionCreator } from '../../reducer/app/app';

interface Props {
    onLoadByRoute: (args: string) => void;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const { onLoadByRoute } = props;
  return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path={PageName.MAIN} render={() => {
                  onLoadByRoute('0');
                  return <Main page={'0'}/>;
                }}/>
                <Route exact path={PageName.GONE} render={() => {
                  onLoadByRoute('1');
                  return <CardPage page={'1'}/>;
                }}/>
                <Route exact path={PageName.LOOKING_RELATIVES} render={() => {
                  onLoadByRoute('2');
                  return <SearchingProfile page={'2'}/>;
                }}/>
                <Route exact path={PageName.ACTIVE_SEARCHES} render={() => {
                  onLoadByRoute('3');
                  return <ActiveSearchesPage/>;
                }}/>
                <Route exact path={PageName.CLOSED_SEARCHES} render={() => {
                  onLoadByRoute('4');
                  return <ActiveSearchesPage/>;
                }}/>
                <Route exact path={PageName.LOGIN} render={() => {
                  onLoadByRoute('0');
                  return <LoginPage page={'0'}/>;
                }}/>
                <Route render={() => {
                  onLoadByRoute('0');
                  return <NotFound page={'0'}/>;
                }}/>
            </Switch>
        </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoadByRoute(page) {
    dispatch(ActionCreator.changePage(page));
  },
});

export default connect(null, mapDispatchToProps)(App);
