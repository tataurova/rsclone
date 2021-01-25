import { useHistory } from 'react-router-dom';
import { ActionCreator as AppCreator } from '../app/app';
import { AuthorizationStatus, RouteName, PageName } from '../../const';
import { extend } from '../../utils/common';

/*const history = useHistory();
history.push(RouteName.LOGIN);*/

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: '',
};

const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  WRITE_USER: 'WRITE_USER',
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  writeUser: (user) => ({
    type: ActionType.WRITE_USER,
    payload: user,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.WRITE_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => api.get(RouteName.LOGIN)
    .then((answer) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      return answer;
    })
    .then((answer) => {
      dispatch(ActionCreator.writeUser(answer.data.email));
    }),

  login: (authData) => (dispatch, getState, api) => api.post(RouteName.BASE_SERVER + RouteName.LOGIN, {
    email: authData.login,
    password: authData.password,
  })
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.writeUser(response.data.email));
    }),
  signup: (signData) => (dispatch, getState, api) => api.post(RouteName.SIGN_UP, {
    name: signData.name,
    email: signData.login,
    password: signData.password,
  })
    .then(() => {
      dispatch(AppCreator.changePage(PageName.MAIN));
    })
    .catch(() => {
      dispatch(AppCreator.changePage(PageName.MAIN));
    }),
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
