import { extend } from '../../utils/common';
import { PageName, SHOW_ERROR_TIMEOUT } from '../../const';

const initialState = {
  gonePeople: [],
  lookingRelativesPeople: [],
  activeSearches: [],
  closedSearches: [],
  isFetching: false,
  error: false,
};

const ActionType = {
  LOAD_GONE_PEOPLE: 'LOAD_GONE_PEOPLE',
  LOAD_LOOKING_RELATIVES_PEOPLE: 'LOAD_LOOKING_RELATIVES_PEOPLE',
  LOAD_ACTIVE_SEARCHES: 'LOAD_ACTIVE_SEARCHES',
  LOAD_CLOSED_SEARCHES: 'LOAD_CLOSED_SEARCHES',
  SET_FETCHING_STATUS: 'SET_FETCHING_STATUS',
  WRITE_ERROR: 'WRITE_ERROR',
};

const ActionCreator = {
  setFetchingStatus: (status) => ({
    type: ActionType.SET_FETCHING_STATUS,
    payload: status,
  }),
  loadGonePeople: (gonePeople) => ({
    type: ActionType.LOAD_GONE_PEOPLE,
    payload: gonePeople,
  }),
  loadLookingRelativesPeople: (offers) => ({
    type: ActionType.LOAD_LOOKING_RELATIVES_PEOPLE,
    payload: offers,
  }),
  loadActiveSearches: (reviews) => ({
    type: ActionType.LOAD_ACTIVE_SEARCHES,
    payload: reviews,
  }),
  loadClosedSearches: (offers) => ({
    type: ActionType.LOAD_CLOSED_SEARCHES,
    payload: offers,
  }),
  writeError: (error) => ({
    type: ActionType.WRITE_ERROR,
    payload: error,
  }),
};

const Operation = {
  loadGonePeople: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(PageName.GONE)
      .then((gonePeople) => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        dispatch(ActionCreator.loadGonePeople(gonePeople));
      })
      .catch(() => {
        dispatch(ActionCreator.writeError(true));
        dispatch(ActionCreator.setFetchingStatus(false));
        setTimeout(() => dispatch(ActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
      });
  },
  loadLookingRelativesPeople: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(PageName.LOOKING_RELATIVES)
      .then((gonePeople) => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        dispatch(ActionCreator.loadLookingRelativesPeople(gonePeople));
      })
      .catch(() => {
        dispatch(ActionCreator.writeError(true));
        dispatch(ActionCreator.setFetchingStatus(false));
        setTimeout(() => dispatch(ActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
      });
  },
  loadActiveSearches: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(PageName.ACTIVE_SEARCHES)
      .then((gonePeople) => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        dispatch(ActionCreator.loadActiveSearches(gonePeople));
      })
      .catch(() => {
        dispatch(ActionCreator.writeError(true));
        dispatch(ActionCreator.setFetchingStatus(false));
        setTimeout(() => dispatch(ActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
      });
  },
  loadClosedSearches: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(PageName.CLOSED_SEARCHES)
      .then((gonePeople) => {
        dispatch(ActionCreator.setFetchingStatus(false));
        dispatch(ActionCreator.writeError(initialState.error));
        dispatch(ActionCreator.loadClosedSearches(gonePeople));
      })
      .catch(() => {
        dispatch(ActionCreator.writeError(true));
        dispatch(ActionCreator.setFetchingStatus(false));
        setTimeout(() => dispatch(ActionCreator.writeError(false)), SHOW_ERROR_TIMEOUT);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FETCHING_STATUS:
      return extend(state, {
        isFetching: action.payload,
      });
    case ActionType.LOAD_GONE_PEOPLE:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_LOOKING_RELATIVES_PEOPLE:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_ACTIVE_SEARCHES:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.LOAD_CLOSED_SEARCHES:
      return extend(state, {
        favoriteOffers: action.payload,
      });
  }

  return state;
};

export {
  reducer, Operation, ActionType, ActionCreator,
};
