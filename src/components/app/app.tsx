import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import LoginPage from '../login/login';
import { PageName } from '../../const';

const App = () => (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path={PageName.MAIN} render={() => <Main />}>
          </Route>
          <Route exact path={PageName.GONE} render={() => <CardPage />}>
          </Route>
          <Route exact path={PageName.LOOKING_RELATIVES} render={() => <Main />}>
          </Route>
          <Route exact path={PageName.ACTIVE_SEARCHES} render={() => <Main />}>
          </Route>
          <Route exact path={PageName.CLOSED_SEARCHES} render={() => <Main />}>
          </Route>
          <Route exact path={PageName.LOGIN} render={() => <LoginPage />}>
          </Route>
          <Route render={() => <NotFound />}>
          </Route>
        </Switch>
      </BrowserRouter>
);

export default App;
