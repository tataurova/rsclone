import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthorizationStatus } from '../../const';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import Header from './header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
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

  const history = createMemoryHistory();
  const pushSpy = jest.spyOn(history, 'push');

  it('History push is called when Login button is clicked', () => {
    const tree = mount(
            <Provider store={store}>
                <Router history={history}>
            <Header
                    page={'0'}
                    authorizationStatus={AuthorizationStatus.NO_AUTH}
                />
                </Router>
            </Provider>,
    );

    expect(tree.find(Header)).toHaveLength(1);
    expect(tree.find(Button)).toHaveLength(1);
    tree.find(Button).simulate('click');
    expect(pushSpy).toHaveBeenCalled();
  });

  it('setState is called when menu button is clicked', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    (useStateSpy as jest.Mock).mockImplementation((init) => [init, setState]);
    const tree = mount(
            <Provider store={store}>
                <Header
                    page={'0'}
                    authorizationStatus={AuthorizationStatus.NO_AUTH}
                />
            </Provider>,
    );

    expect(tree.find(MenuIcon)).toHaveLength(1);
    tree.find(MenuIcon).simulate('click');
    expect(setState).toHaveBeenCalled();
  });
});
