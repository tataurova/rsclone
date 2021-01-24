import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';
import * as Adapter from 'enzyme-adapter-react-16';
import Header from './header';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('Render Header without auth', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        gonePeople: [],
        lookingRelativesPeople: [],
        activeSearches: mockActiveSearches,
        closedSearches: mockClosedSearches,
        isFetching: false,
        error: false,
      },
      APP: {
        page: '2',
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: '',
      },
    });

    const tree = renderer
      .create(
                <Provider store={store}>
                    <Header
                        page={'0'}
                        authorizationStatus={AuthorizationStatus.NO_AUTH}
                    />
                </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Render Header with auth', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      DATA: {
        gonePeople: [],
        lookingRelativesPeople: [],
        activeSearches: mockActiveSearches,
        closedSearches: mockClosedSearches,
        isFetching: false,
        error: false,
      },
      APP: {
        page: '2',
      },
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: '',
      },
    });

    const tree = renderer
      .create(
                <Provider store={store}>
                    <Header
                        page={'0'}
                        authorizationStatus={AuthorizationStatus.AUTH}
                    />
                </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
