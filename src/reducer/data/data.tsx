import { extend } from '../../utils/common';
import { PageName, SHOW_ERROR_TIMEOUT } from '../../const';

const initialState = {
  gonePeople: [],
  lookingRelativesPeople: [],
  activeSearches: [
    {
      id: 1,
      status: 'Поиск на месте',
      city: 'Санкт-Петербург',
      name: 'Петр',
      age: '30',
      date: '12-01-2020',
      coordinator: 'Чиж',
      people: [{
        name: 'Саша',
        status: 'way',
        transport: 'car',
        places: '1',
        time: '12:00',
        district: 'Василеостровский',
      }, {
        name: 'Катя',
        status: 'place',
        transport: 'own',
        places: '0',
        time: '19:00',
        district: 'Василеостровский',
      }, {
        name: 'Рома',
        status: 'place',
        transport: 'need',
        places: '0',
        time: '2:00',
        district: 'Калининский',
      }, {
        name: 'Илья',
        status: 'way',
        transport: 'own',
        places: '0',
        time: '15:00',
        district: 'Выборгский',
      }, {
        name: 'Саша',
        status: 'way',
        transport: 'car',
        places: '1',
        time: '12:00',
        district: 'Василеостровский',
      }, {
        name: 'Катя',
        status: 'place',
        transport: 'own',
        places: '0',
        time: '19:00',
        district: 'Василеостровский',
      }, {
        name: 'Рома',
        status: 'place',
        transport: 'need',
        places: '0',
        time: '2:00',
        district: 'Калининский',
      }, {
        name: 'Илья',
        status: 'way',
        transport: 'own',
        places: '0',
        time: '15:00',
        district: 'Выборгский',
      }],
    }, {
      id: 3,
      status: 'Стоп. Проверка информации',
      city: 'Минск',
      name: 'Аркадий',
      age: '100',
      date: '01-01-2021',
      coordinator: 'Чип',
      people: [{
        name: 'Саша',
        status: 'way',
        transport: 'car',
        places: '1',
        time: '12:00',
        district: 'Василеостровский',
      }, {
        name: 'Катя',
        status: 'place',
        transport: 'own',
        places: '0',
        time: '19:00',
        district: 'Василеостровский',
      }, {
        name: 'Рома',
        status: 'place',
        transport: 'need',
        places: '0',
        time: '2:00',
        district: 'Калининский',
      }, {
        name: 'Илья',
        status: 'way',
        transport: 'own',
        places: '0',
        time: '15:00',
        district: 'Выборгский',
      }],
    },
    {
      id: 4,
      status: 'Поиск на месте',
      city: 'Москва',
      name: 'Владимир',
      age: '3000',
      date: '12-06-2020',
      coordinator: 'Дейл',
      people: [{
        name: 'Саша',
        status: 'way',
        transport: 'car',
        places: '1',
        time: '12:00',
        district: 'Василеостровский',
      }, {
        name: 'Катя',
        status: 'place',
        transport: 'own',
        places: '0',
        time: '19:00',
        district: 'Василеостровский',
      }, {
        name: 'Рома',
        status: 'place',
        transport: 'need',
        places: '0',
        time: '2:00',
        district: 'Калининский',
      }, {
        name: 'Илья',
        status: 'way',
        transport: 'own',
        places: '0',
        time: '15:00',
        district: 'Выборгский',
      }],
    },
    {
      id: 5,
      status: 'Резерв',
      city: 'Санкт-Петербург',
      name: 'Петр',
      age: '30',
      date: '12-01-2020',
      coordinator: 'Чи',
      people: [],
    },
    {
      id: 6,
      status: 'Поиск на месте',
      city: 'Киев',
      name: 'Анна',
      age: '123',
      date: '12-01-2020',
      coordinator: 'Кат',
      people: [{
        name: 'Саша',
        status: 'way',
        transport: 'car',
        places: '1',
        time: '12:00',
        district: 'Василеостровский',
      }, {
        name: 'Катя',
        status: 'place',
        transport: 'own',
        places: '0',
        time: '19:00',
        district: 'Василеостровский',
      }, {
        name: 'Рома',
        status: 'place',
        transport: 'need',
        places: '0',
        time: '2:00',
        district: 'Калининский',
      }, {
        name: 'Илья',
        status: 'way',
        transport: 'own',
        places: '0',
        time: '15:00',
        district: 'Выборгский',
      }],
    },
  ],
  closedSearches: [{
    id: 2,
    status: 'Архив',
    city: 'Колпино',
    name: 'Фекла',
    age: '200',
    date: '10-01-2020',
    coordinator: 'Чиж',
    people: [{
      name: 'Саша',
      status: 'way',
      transport: 'car',
      places: '1',
      time: '12:00',
      district: 'Василеостровский',
    }, {
      name: 'Катя',
      status: 'place',
      transport: 'own',
      places: '0',
      time: '19:00',
      district: 'Василеостровский',
    }, {
      name: 'Рома',
      status: 'place',
      transport: 'need',
      places: '0',
      time: '2:00',
      district: 'Калининский',
    }, {
      name: 'Илья',
      status: 'way',
      transport: 'own',
      places: '0',
      time: '15:00',
      district: 'Выборгский',
    }],
  }],
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
