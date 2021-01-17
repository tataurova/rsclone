import { extend } from '../../utils/common';

const initialState = {
  page: '0',
};

const ActionType = {
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const ActionCreator = {
  changePage: (page) => ({
    type: ActionType.CHANGE_PAGE,
    payload: page,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PAGE:
      return extend(state, {
        page: action.payload,
      });
  }

  return state;
};

export { reducer, ActionType };
