import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ActiveSearchesPage from './active-searches-page';
import Button from '../controls/button/button';
import { mockActiveSearches, mockClosedSearches } from '../../mock';
import { AuthorizationStatus } from '../../const';
import { mockFunction } from '../../utils/common';

configure({ adapter: new Adapter() });

describe('When button is clicked state openPopup is changed to true', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  (useStateSpy as jest.Mock).mockImplementation((init) => [init, setState]);
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

  beforeEach(() => {
    wrapper = mount(
            <Provider store={store}>
                <ActiveSearchesPage
                    page={'3'}
                    activeSearches={mockActiveSearches}
                    closedSearches={mockActiveSearches}
                    onAddActiveSearches={mockFunction}
                    onAddClosedSearches={mockFunction}
                />
            </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('openPopup state is changed to true', () => {
    expect(wrapper.find(ActiveSearchesPage)).toHaveLength(1);
    wrapper.find(Button).simulate('click');
    expect(setState).toHaveBeenCalledWith(true);
  });
});
