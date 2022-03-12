import axios from 'axios';
import configKeys from '../config.json';
import localStorageService from './localStorage.service';
import authService from './auth.service';

const http = axios.create({
  baseURL: configKeys.apiEndpoint,
});

http.interceptors.request.use(
  (config) => {
    const refreshToken = localStorageService.getRefreshToken();
    const expiresDate = localStorageService.getTokenExpiresDate();

    if (refreshToken && Date.now() > expiresDate) {
      const authData = authService.refreshToken();
      localStorageService.setTokens({
        idToken: authData.id_token,
        refreshToken: authData.refresh_token,
        expiresIn: authData.expires_in,
      });
    }

    // todo: enable requests only for authenticated users id need

    const { url } = config;
    config.url = url[url.length - 1] === '/' ? url.slice(0, -1) : url;
    config.url += '.json';

    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (res) => {
    res.data = Object.values(res.data)[0].id ? Object.values(res.data) : res.data;
    return res;
  },
  (error) => {
    const isExpected =
      error.response && error.response.status >= 400 && error.response.status < 500;

    if (!isExpected) {
      console.log('unexpected error');
      // todo: toast unexpected error;
    }

    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default httpService;
