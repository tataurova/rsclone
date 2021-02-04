import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Main from './main';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';

jest.mock('../../i18n', () => ({
  addResourceBundle: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<Main />', () => {
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

  it('Render Main', () => {
    const tree = renderer
      .create(
          <Provider store={store}>
              <Main
                  page={'0'}
              />
          </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
