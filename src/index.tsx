import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createAPI } from './api';
import App from './components/app/app';
import reducer from './reducer/reducer';
import { Operation as DataOperation, ActionCreator as DataActionCreator } from './reducer/data/data';
import { Operation as UserOperation, ActionCreator, AuthorizationStatus } from './reducer/user/user';
import { SHOW_ERROR_TIMEOUT } from './const';
import './i18n';
import ThemeProvider from './components/theme-provider/theme-provider';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onNoResponse = () => {
  store.dispatch(DataActionCreator.writeError(true));
  setTimeout(() => store.dispatch(DataActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
};

const api = createAPI(onUnauthorized, onNoResponse);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
          <ThemeProvider>
            <CssBaseline />
            <App />
          </ThemeProvider>
      </Provider>,
      document.querySelector('#root')
  );
};

store.dispatch(UserOperation.checkAuth())
  .finally(() => {
    store.dispatch(DataOperation.loadGonePeople());
    store.dispatch(DataOperation.loadLookingRelativesPeople());
    init();
  });
