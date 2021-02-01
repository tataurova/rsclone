import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { mount, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { AuthorizationStatus, RouteName } from '../../const';
import CardPage from '../card-page/card-page';
import PrivateRoute from './private-route';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('<PrivateRoute />', () => {
  it('Should PrivateRoute render correctly', () => {
    const initialState = {
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    };
    const store = mockStore(initialState);
    const tree = renderer.create(
            <BrowserRouter>
                <PrivateRoute
                    store={store}
                    path={RouteName.GONE}
                    exact={true}
                    render={() => (
                            <CardPage
                                page={'1'}
                            />
                    )}
                />
            </BrowserRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Renders the component when user with auth', () => {
    const initialState = {
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    };
    const store = mockStore(initialState);

    const privateRoute = mount(
            <BrowserRouter>
                <PrivateRoute
                    store={store}
                    path={RouteName.GONE}
                    exact={true}
                    render={() => (
                            <CardPage
                                page={'1'}
                            />
                    )}
                />
            </BrowserRouter>,
    );
    expect(privateRoute.length).toEqual(1);
  });
});
