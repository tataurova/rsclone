export const RouteName = {
  MAIN: '/',
  LOGIN: '/user/login',
  SIGN_UP: '/user/signup',
  GONE: '/gone',
  LOOKING_RELATIVES: '/looking-relatives',
  ACTIVE_SEARCHES: '/active-searches',
  CLOSED_SEARCHES: '/closed-searches',
  BASE_SERVER: 'http://localhost:5000',
};

export const MenuItemText = {
  MAIN: 'Главная',
  GONE: 'Пропали',
  LOOKING_RELATIVES: 'Ищут родственников',
  ACTIVE_SEARCHES: 'Активные поиски',
  CLOSED_SEARCHES: 'Закрытые поиски',
  STATISTIC: 'Статистика',
  LANGUAGE: 'Язык',
  EXIT: 'Выйти',
  ENTER: 'Войти',
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
  { id: 'status', label: 'Статус' },
  { id: 'city', label: 'Город' },
  { id: 'name', label: 'ФИО' },
  { id: 'age', label: 'Возраст' },
  { id: 'date', label: 'Дата' },
  { id: 'coordinator', label: 'Координатор' },
  { id: 'people', label: 'Людей на поиске' },
  { id: 'actions', label: 'Действия', disableSorting: true },
];

export const getStatusCollection = [
  'Резерв',
  'Поиск на месте',
  'Стоп. Проверка информации',
  'Архив',
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
};

export const ActiveMenuItemName = {
  '0': 'Главная',
  '1': 'Пропали',
  '2': 'Ищут родственников',
  '3': 'Активные поиски',
  '4': 'Закрытые поиски',
}

export const LoginInput = {
  NAME: 'name',
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const SearchStatusName = {
  ARCHIVE: 'Архив',
}

export const NOT_HOME_PLACES = ['place', 'way'];
export const FORM_FIELDS = ['city', 'name', 'age', 'coordinator', 'status', 'date'];

export const MAX_TIMEOUT = 5000;
export const SHOW_ERROR_TIMEOUT = 3000;
export const LOGIN_MIN_LENGTH = 5;
export const PASSWORD_MIN_LENGTH = 5;
export const NAME_MIN_LENGTH = 2;

export const HOVER_TABLE_COLOR = '#fffbf2';
