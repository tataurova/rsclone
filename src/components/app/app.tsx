import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import LoginPage from '../login/login';
import { RouteName, PageName } from '../../const';
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
                <Route exact path={RouteName.MAIN} render={() => {
                    onLoadByRoute(PageName.MAIN);
                    return <Main page={PageName.MAIN}/>;
                }}>
                </Route>
                <Route exact path={RouteName.GONE} render={() => {
                    onLoadByRoute(PageName.GONE);
                    return <CardPage page={PageName.GONE}/>;
                }}>
                </Route>
                <Route exact path={RouteName.LOOKING_RELATIVES} render={() => {
                    onLoadByRoute(PageName.LOOKING_RELATIVES);
                    return <SearchingProfile page={PageName.LOOKING_RELATIVES}/>;
                }}>
                </Route>
                <Route exact path={RouteName.ACTIVE_SEARCHES} render={() => {
                    onLoadByRoute(PageName.ACTIVE_SEARCHES);
                    return <ActiveSearchesPage />;
                }}>
                </Route>
                <Route exact path={RouteName.CLOSED_SEARCHES} render={() => {
                    onLoadByRoute(PageName.CLOSED_SEARCHES);
                    return <ActiveSearchesPage />;
                }}>
                </Route>
                <Route exact path={RouteName.LOGIN} render={() => {
                    onLoadByRoute(PageName.MAIN);
                    return <LoginPage page={PageName.MAIN}/>;
                }}>
                </Route>
                <Route render={() => {
                    onLoadByRoute(PageName.MAIN);
                    return <NotFound page={PageName.MAIN}/>;
                }}>
                </Route>
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
