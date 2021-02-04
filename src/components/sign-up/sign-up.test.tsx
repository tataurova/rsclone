import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SignUp from './sign-up';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';
import { mockFunction } from '../../utils/common';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<SignUp />', () => {
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
    nameValid: true,
    loginValid: true,
    passwordValid: true,
  };

  const nameRef = React.createRef<HTMLInputElement>();
  const loginRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  it('Render SignUp', () => {
    const tree = renderer
      .create(
                <Provider store={store}>
                    <SignUp
                        state={state}
                        onSubmit={mockFunction}
                        onChange={mockFunction}
                        nameRef={nameRef}
                        loginRef={loginRef}
                        passwordRef={passwordRef}
                    />
                    </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
