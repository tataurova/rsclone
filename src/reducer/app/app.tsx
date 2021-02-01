import { extend } from '../../utils/common';

const initialState = {
  page: '0',
  darkMode: false,
};

const ActionType = {
  CHANGE_PAGE: 'CHANGE_PAGE',
  CHANGE_DARK_MODE: 'CHANGE_DARK_MODE',
};

export const ActionCreator = {
  changePage: (page) => ({
    type: ActionType.CHANGE_PAGE,
    payload: page,
  }),
  changeDarkMode: (mode) => ({
    type: ActionType.CHANGE_DARK_MODE,
    payload: mode,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PAGE:
      return extend(state, {
        page: action.payload,
      });
    case ActionType.CHANGE_DARK_MODE:
      return extend(state, {
        darkMode: action.payload,
      });
  }

  return state;
};

export { reducer, ActionType };
