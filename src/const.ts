export const RouteName = {
  MAIN: '/',
  LOGIN: '/login',
  GONE: '/gone',
  LOOKING_RELATIVES: '/looking-relatives',
  ACTIVE_SEARCHES: '/active-searches',
  CLOSED_SEARCHES: '/closed-searches',
};
export const PageName = {
  MAIN: '/',
  LOGIN: '/login',
  GONE: '/gone',
  LOOKING_RELATIVES: '/looking-relatives',
  ACTIVE_SEARCHES: '/active-searches',
  CLOSED_SEARCHES: '/closed-searches',
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

export const MAX_TIMEOUT = 5000;
export const SHOW_ERROR_TIMEOUT = 3000;
