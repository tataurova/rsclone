import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.AUTH;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;
