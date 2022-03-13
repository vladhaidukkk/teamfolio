import { createSlice } from '@reduxjs/toolkit';
import { authService, localStorageService } from '../services';
import { history } from '../utils/core';
import { createUser } from './users';

const accountId = localStorageService.getAccountId();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accountId: accountId || null,
    isLoggedIn: !!accountId && accountId !== 'null',
    error: null,
  },
  reducers: {
    requested: (state) => {
      state.error = null;
    },
    successed: (state, action) => {
      state.accountId = action.payload;
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.accountId = null;
      state.isLoggedIn = false;
    },
    failed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { requested, successed, loggedOut, failed } = authSlice.actions;

export const signUp =
  ({ email, password, ...restData }) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const authData = await authService.signUp({ email, password });
      localStorageService.setTokens(authData);
      dispatch(createUser(authData.localId, { email, ...restData }));
      dispatch(successed(authData.localId));
      history.push('/');
    } catch (error) {
      const { message } = error;
      dispatch(failed(message));
    }
  };

export const logIn =
  ({ email, password }, redirect) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const authData = await authService.logIn({ email, password });
      localStorageService.setTokens(authData);
      dispatch(successed(authData.localId));
      history.push(redirect);
    } catch (error) {
      const { message } = error;
      dispatch(failed(message));
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeTokens();
  dispatch(loggedOut());
  history.push('/');
};

export const getAccountId = () => (state) => {
  return state.auth.accountId;
};

export const getLoggedInStatus = () => (state) => {
  return state.auth.isLoggedIn;
};

export const getAuthError = () => (state) => {
  return state.auth.error;
};

const authReducer = authSlice.reducer;
export default authReducer;
