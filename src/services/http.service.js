import axios from 'axios';
import configKeys from '../config.json';

const http = axios.create({
  baseURL: configKeys.apiEndpoint,
});

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default httpService;
