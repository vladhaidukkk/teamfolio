import axios from 'axios';
import localStorageService from './localStorage.service';

const authHttp = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
  },
});

const signUp = async ({ email, password }) => {
  const { data } = await authHttp.post('accounts:signUp', {
    email,
    password,
    returnSecureToken: true,
  });
  return data;
};

const logIn = async ({ email, password }) => {
  const { data } = await authHttp.post('accounts:signInWithPassword', {
    email,
    password,
    returnSecureToken: true,
  });
  return data;
};

const refreshToken = async () => {
  const { data } = await authHttp.post('token', {
    grant_type: 'refresh_token',
    refresh_token: localStorageService.getRefreshToken(),
  });
  return data;
};

const authService = {
  signUp,
  logIn,
  refreshToken,
};

export default authService;
