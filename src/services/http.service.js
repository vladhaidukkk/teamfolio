import axios from 'axios';
import configKeys from '../config.json';
import localStorageService from './localStorage.service';
import authService from './auth.service';
import { toast } from 'material-react-toastify';

const http = axios.create({
  baseURL: configKeys.databaseURL + '/',
});

http.interceptors.request.use(
  async (config) => {
    const refreshToken = localStorageService.getRefreshToken();
    const expiresDate = localStorageService.getTokenExpiresDate();

    if (refreshToken && Date.now() > expiresDate) {
      const authData = await authService.refreshToken();
      localStorageService.setTokens({
        localId: authData.user_id,
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
    if (res.data) {
      res.data = Object.values(res.data)[0].id ? Object.values(res.data) : res.data;
    }

    return res;
  },
  (error) => {
    const isExpected =
      error.response && error.response.status >= 400 && error.response.status < 500;

    if (!isExpected) {
      toast.error('Something went wrong. Try it latter.');
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
