import { createSlice } from '@reduxjs/toolkit';
import { authService, localStorageService, usersService } from '../services';
import { UserStatusConstants } from '../utils/constants';
import { history } from '../utils/core';

const account = localStorageService.getAccountData();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    account: account || null,
    isLoggedIn: !!account,
    error: null,
  },
  reducers: {
    requested: (state) => {
      state.error = null;
    },
    successed: (state, action) => {
      state.account = action.payload;
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.account = null;
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
      const accountData = await usersService.createUser(authData.localId, {
        id: authData.localId,
        email,
        ...restData,
        status: UserStatusConstants.Guest,
        registeredAt: Date.now(),
      });
      localStorageService.setTokens(authData);
      localStorageService.setAccountData(accountData);
      dispatch(successed(accountData));
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
      const accountData = await usersService.getUser(authData.localId);
      localStorageService.setTokens(authData);
      localStorageService.setAccountData(accountData);
      dispatch(successed(accountData));
      history.push(redirect);
    } catch (error) {
      const { message } = error;
      dispatch(failed(message));
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeTokens();
  localStorageService.removeAccountData();
  dispatch(loggedOut());
  history.push('/');
};

export const getAccountData = () => (state) => {
  return state.auth.account;
};

export const getLoggedInStatus = () => (state) => {
  return state.auth.isLoggedIn;
};

const authReducer = authSlice.reducer;
export default authReducer;
