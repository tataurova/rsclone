import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Nav from './nav';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';
import { mockFunction } from '../../utils/common';

describe('<Nav />', () => {
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

  it('Render Nav', () => {
    const tree = renderer
      .create(
          <Provider store={store}>
              <Nav
                  page={'0'}
                  onMenuClick={mockFunction}
              />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
