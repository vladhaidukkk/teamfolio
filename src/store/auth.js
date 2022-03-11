import { createSlice } from '@reduxjs/toolkit';
import { authService } from 'services';
import localStorageService from 'services/localStorage.service';

const accountId = localStorageService.getUserId();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accountId: accountId || null,
    isLoggedIn: !!accountId || false,
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
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const authData = await authService.signUp({ email, password });
      localStorageService.setTokens(authData);
      dispatch(successed(authData.localId));
      // todo: create user to realtime db
    } catch (error) {
      const { message } = error;
      dispatch(failed(message));
    }
  };

export const logIn =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const authData = await authService.logIn({ email, password });
      localStorageService.setTokens(authData);
      dispatch(successed(authData.localId));
      // todo: history.push
    } catch (error) {
      const { message } = error;
      dispatch(failed(message));
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeTokens();
  dispatch(loggedOut());
};

const authReducer = authSlice.reducer;
export default authReducer;
