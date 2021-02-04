import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ActiveSearchesPage from './active-searches-page';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';
import { mockFunction } from '../../utils/common';

describe('<ActiveSearchesPage />', () => {
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
      page: '3',
    },
    AUTH: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: '',
    },
  });

  it('Render ActiveSearchesPage', () => {
    const tree = renderer
      .create(
                <Provider store={store}>
                    <ActiveSearchesPage
                        page={'3'}
                        activeSearches={mockActiveSearches}
                        closedSearches={mockActiveSearches}
                        onAddActiveSearches={mockFunction}
                        onAddClosedSearches={mockFunction}
                    />
                </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
