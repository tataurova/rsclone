import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import { PageName } from '../../const';

const App = () => (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/gone'>
            <CardPage />
          </Route>
          <Route path={PageName.LOOKING_RELATIVES} render={() => <Main />}>
          </Route>
          <Route path={PageName.ACTIVE_SEARCHES} render={() => <Main />}>
          </Route>
          <Route path={PageName.CLOSED_SEARCHES} render={() => <Main />}>
          </Route>
          <Route render={() => <NotFound />}>
          </Route>
        </Switch>
      </BrowserRouter>
);

export default App;
