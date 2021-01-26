export const RouteName = {
  MAIN: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  GONE: '/gone',
  LOOKING_RELATIVES: '/looking-relatives',
  ACTIVE_SEARCHES: '/active-searches',
  CLOSED_SEARCHES: '/closed-searches',
  STATISTICS: '/statistics',
  BASE_SERVER: 'http://localhost:5000',
};

export const MenuItemText = {
  MAIN: 'Main',
  GONE: 'Gone',
  LOOKING_RELATIVES: 'Looking relatives',
  ACTIVE_SEARCHES: 'Active searches',
  CLOSED_SEARCHES: 'Closed searches',
  STATISTICS: 'Statistics',
  LANGUAGE: 'Language',
  LOGOUT: 'Logout',
  LOGIN: 'Login',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

export const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVICE_UNAVAILABLE: 503,
  TIMEOUT_ERROR: 'timeout_error',
};

export const headCells = [
  {id: 'status', label: 'Status'},
  {id: 'city', label: 'City'},
  {id: 'name', label: 'Name'},
  {id: 'age', label: 'Age'},
  {id: 'date', label: 'Date'},
  {id: 'coordinator', label: 'Coordinator'},
  {id: 'people on the search', label: 'People on the search'},
  {id: 'actions', label: 'Actions', disableSorting: true},
];

export const statusSelectItems = [
  'Reserve',
  'Local search',
  'Stop. Information verification',
  'Archive',
];

export const SearcherStatus = {
  way: 'В пути',
  place: 'На месте',
  home: 'Дома',
};

export const TransportStatus = {
  car: 'На машине',
  own: 'Своим ходом',
  need: 'Нужна машина',
};

export const WayStatus = {
  WAY: 'way',
};

export const TransportName = {
  CAR: 'car',
};

export const PageName = {
  MAIN: '0',
  GONE: '1',
  LOOKING_RELATIVES: '2',
  ACTIVE_SEARCHES: '3',
  CLOSED_SEARCHES: '4',
  LOGIN: '5',
  SIGN_UP: '6',
  STATISTICS: '7'
};

export const ActiveMenuItemName = {
  '0': 'Main',
  '1': 'Gone',
  '2': 'Looking relatives',
  '3': 'Active searches',
  '4': 'Closed searches',
}

export const LoginInput = {
  NAME: 'name',
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const SearchStatusName = {
  ARCHIVE: 'Архив',
}

export const SearchLocationStatus = {
  startValue: 'start',
  endValue: 'end'
}

export const MonthOfYear = {
    january: 'январь',
    february: 'февраль',
    march: 'март',
    april: 'апрель',
    may: 'май',
    june: 'июнь',
    july: 'июль',
    august: 'август',
    september: 'сентябрь',
    october: 'октябрь',
    november: 'ноябрь',
    december: 'декабрь'

}
export const numbersOfMonth = {
  '01': 0,
  '02': 0,
  '03': 0,
  '04': 0,
  '05': 0,
  '06': 0,
  '07': 0,
  '08': 0,
  '09': 0,
  '10': 0,
  '11': 0,
  '12': 0,
}

export const NOT_HOME_PLACES = ['place', 'way'];
export const FORM_FIELDS = ['city', 'name', 'age', 'coordinator', 'status', 'date'];

export const MAX_TIMEOUT = 5000;
export const SHOW_ERROR_TIMEOUT = 3000;
export const LOGIN_MIN_LENGTH = 5;
export const PASSWORD_MIN_LENGTH = 5;
export const NAME_MIN_LENGTH = 2;

export const HOVER_TABLE_COLOR = '#fffbf2';
