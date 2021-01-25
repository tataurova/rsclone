import * as React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Main from '../main/main';
import CardPage from '../card-page/card-page';
import NotFound from '../not-found/not-found';
import LoginPage from '../login-page/login-page';
import { RouteName, PageName, AuthorizationStatus } from '../../const';
import SearchingProfile from '../search-gone/search-gone-profile';
import ActiveSearchesPage from '../active-searches-page/active-searches-page';
import PrivateRoute from '../private-route/private-route';
import SignUp from '../sign-up/sign-up';
import withAuthentication from '../../hocs/with-authentication/with-authentication';
import withSignUp from '../../hocs/with-sign-form/with-sign-form';
import { ActionCreator } from '../../reducer/app/app';
import NameSpace from '../../reducer/name-space';
import { Operation as UserOperation } from '../../reducer/user/user';
import Statistics from '../statistics/statistics';

const LoginWithAuthentication = withAuthentication(LoginPage);
const SignUpWithValidate = withSignUp(SignUp);

interface Props {
    onLoadByRoute: (args: string) => void;
    authorizationStatus: string;
    onSubmitForm: () => void;
    onSignUp: () => void;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {
    onLoadByRoute, authorizationStatus, onSubmitForm, onSignUp,
  } = props;

  return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path={RouteName.MAIN} render={() => {
                  onLoadByRoute(PageName.MAIN);
                  return <Main page={PageName.MAIN}/>;
                }}>
                </Route>
                <PrivateRoute exact path={RouteName.GONE} render={() => {
                  onLoadByRoute(PageName.GONE);
                  return <CardPage page={PageName.GONE}/>;
                }}>
                </PrivateRoute>
                <Route exact path={RouteName.LOOKING_RELATIVES} render={() => {
                  onLoadByRoute(PageName.LOOKING_RELATIVES);
                  return <SearchingProfile page={PageName.LOOKING_RELATIVES}/>;
                }}>
                </Route>
                <Route exact path={RouteName.ACTIVE_SEARCHES} render={() => {
                  onLoadByRoute(PageName.ACTIVE_SEARCHES);
                  return <ActiveSearchesPage/>;
                }}>
                </Route>
                <Route exact path={RouteName.CLOSED_SEARCHES} render={() => {
                  onLoadByRoute(PageName.CLOSED_SEARCHES);
                  return <ActiveSearchesPage/>;
                }}>
                </Route>


              <Route exact path={'/statistics'} render={() => {
                // onLoadByRoute('7');
                return <Statistics/>;
              }}>
              </Route>




                <Route exact path={RouteName.LOGIN} render={() => {
                  onLoadByRoute(PageName.MAIN);
                  switch (authorizationStatus) {
                    case AuthorizationStatus.AUTH:
                      return <Redirect to={RouteName.MAIN} />;
                    case AuthorizationStatus.NO_AUTH:
                      return <LoginWithAuthentication
                                onSubmitForm={onSubmitForm}
                            />;
                    default:
                      throw new Error(`Unknown AuthorizationStatus ${authorizationStatus}`);
                  }
                }}>
                </Route>
                <Route exact path={RouteName.SIGN_UP} render={() => {
                  onLoadByRoute(PageName.MAIN);
                  switch (authorizationStatus) {
                    case AuthorizationStatus.AUTH:
                      return <Redirect to={RouteName.MAIN} />;
                    case AuthorizationStatus.NO_AUTH:
                      return <SignUpWithValidate
                                onSubmitForm={onSignUp}
                            />;
                    default:
                      throw new Error(`Unknown AuthorizationStatus ${authorizationStatus}`);
                  }
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

export const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.AUTH].authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadByRoute(page) {
    dispatch(ActionCreator.changePage(page));
  },
  onSubmitForm(authData) {
    dispatch(UserOperation.login(authData));
  },
  onSignUp(signData) {
    dispatch(UserOperation.signup(signData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
