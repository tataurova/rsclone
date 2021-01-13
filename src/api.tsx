import axios from 'axios';
import { MAX_TIMEOUT, PageName, Error } from './const';

export const createAPI = (onUnauthorized, onNoResponse) => {
  const api = axios.create({
    baseURL: PageName.MAIN,
    timeout: MAX_TIMEOUT,
    withCredentials: true,
  });
  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response) {
      if (response.status === Error.UNAUTHORIZED) {
        onUnauthorized();
        throw err;
      }
      throw err;
    } else {
      onNoResponse();
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
