import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginPage from './login-page';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';
import { mockFunction } from '../../utils/common';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<LoginPage />', () => {
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

  const state = {
    loginValid: true,
    passwordValid: true,
  };
  const loginRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  it('Render LoginPage', () => {
    const tree = renderer
      .create(
                <Provider store={store}>
                    <LoginPage
                        state={state}
                        onSubmit={mockFunction}
                        onChange={mockFunction}
                        loginRef={loginRef}
                        passwordRef={passwordRef}
                    />
                </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
