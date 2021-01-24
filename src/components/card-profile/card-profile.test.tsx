import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CardProfile from './card-profile';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<CardProfile />', () => {
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

  it('Render CardProfile', () => {
    const tree = renderer
      .create(
                <Provider store={store}>
                    <CardProfile
                       id={1}
                       image={'test.jpg'}
                       name={'Test'}
                       city={'Test'}
                       birth={'01.01.2000'}
                       age={'21'}
                       missing={'10.01.2021'}
                       sign={'Scar on the left cheek'}
                       close={'Red jacket, blue jeans'}
                       with={'Sports bag'}
                    />
                </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
