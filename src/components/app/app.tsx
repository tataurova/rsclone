import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import LoginPage from '../login/login';
import { PageName } from '../../const';
import SearchingProfile from '../search-gone/search-gone-profile';

const App = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path={PageName.MAIN} render={() => <Main/>}/>
            <Route exact path={PageName.GONE} render={() => <CardPage/>}/>
            <Route exact path={PageName.LOOKING_RELATIVES} render={() => <SearchingProfile/>}/>
            <Route exact path={PageName.ACTIVE_SEARCHES} render={() => <Main/>}/>
            <Route exact path={PageName.CLOSED_SEARCHES} render={() => <Main/>}/>
            <Route exact path={PageName.LOGIN} render={() => <LoginPage/>}/>
            <Route render={() => <NotFound/>}/>
        </Switch>
    </BrowserRouter>
);

export default App;
