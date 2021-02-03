import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteName, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../reducer/user/selectors';

interface Props {
    authorizationStatus: string;
    exact: boolean;
    path: string;
    render: () => React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<Props> = ({
  render, path, exact, authorizationStatus,
}: Props) => (
        <Route
            path={path}
            exact={exact}
            render={() => (
              authorizationStatus === AuthorizationStatus.AUTH
                ? render()
                : <Redirect to={RouteName.PUBLIC_LOGIN} />
            )}
        />
);

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
