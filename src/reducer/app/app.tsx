import { extend } from '../../utils/common';

const initialState = {
  page: '',
};

const ActionType = {
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const ActionCreator = {
  changePage: (city) => ({
    type: ActionType.CHANGE_PAGE,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PAGE:
      return extend(state, {
        city: action.payload,
      });
  }

  return state;
};

export { reducer, ActionType };
