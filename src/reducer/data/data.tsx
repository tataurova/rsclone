import { extend } from '../../utils/common';
import { RouteName, SHOW_ERROR_TIMEOUT } from '../../const';
import { mockActiveSearches, mockClosedSearches } from '../../mock';

const initialState = {
  gonePeople: [],
  lookingRelativesPeople: [],
  activeSearches: mockActiveSearches,
  closedSearches: mockClosedSearches,
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
  ADD_ACTIVE_SEARCHES: 'ADD_ACTIVE_SEARCHES',
  ADD_CLOSED_SEARCHES: 'ADD_CLOSED_SEARCHES',
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
  onAddActiveSearches: (searches) => ({
    type: ActionType.ADD_ACTIVE_SEARCHES,
    payload: searches,
  }),
  onAddClosedSearches: (searches) => ({
    type: ActionType.ADD_CLOSED_SEARCHES,
    payload: searches,
  }),
};

const Operation = {
  loadGonePeople: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFetchingStatus(true));
    return api.get(RouteName.GONE)
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
    return api.get(RouteName.LOOKING_RELATIVES)
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
    return api.get(RouteName.ACTIVE_SEARCHES)
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
    return api.get(RouteName.CLOSED_SEARCHES)
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
    case ActionType.ADD_ACTIVE_SEARCHES:
      return extend(state, {
        activeSearches: action.payload,
      });
    case ActionType.ADD_CLOSED_SEARCHES:
      return extend(state, {
        closedSearches: action.payload,
      });
  }

  return state;
};

export {
  reducer, Operation, ActionType, ActionCreator,
};
