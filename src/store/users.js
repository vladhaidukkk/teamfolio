import { createAction, createSlice } from '@reduxjs/toolkit';
import { usersService } from '../services';
import { UserStatusConstants } from '../utils/constants';
import { toast } from 'material-react-toastify';
import { history } from '../utils/core';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    requested: (state) => {
      state.isLoading = true;
    },
    received: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    failed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    created: (state, action) => {
      if (!state.entities) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    updated: (state, action) => {
      const userIndex = state.entities.findIndex((user) => user.id === action.payload.id);
      state.entities[userIndex] = { ...state.entities[userIndex], ...action.payload.data };
    },
    crudFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { requested, received, failed, created, updated, crudFailed } = usersSlice.actions;
const createRequested = createAction('users/createRequested');
const updateRequested = createAction('users/updateRequested');

export const loadUsers = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await usersService.getUsers();
    dispatch(received(data));
  } catch (error) {
    const { message } = error;
    dispatch(failed(message));
  }
};

export const createUser = (id, payload) => async (dispatch) => {
  dispatch(createRequested());
  try {
    const userData = await usersService.createUser(id, {
      id,
      ...payload,
      avatarUrl:
        'https://firebasestorage.googleapis.com/v0/b/teamfolio.appspot.com/o/avatar-default.png?alt=media&token=af4665db-8b2e-4e7b-9211-b0894ca64c85',
      status: UserStatusConstants.Guest,
      registeredAt: Date.now(),
    });
    dispatch(created(userData));
  } catch (error) {
    const { message } = error;
    dispatch(crudFailed(message));
  }
};

export const updateUser = (id, payload, redirect) => async (dispatch) => {
  dispatch(updateRequested());
  try {
    const data = await usersService.patchUser(id, payload);
    dispatch(updated({ id, data }));
    toast.success('Your account was updated:)');
    if (redirect) history.push(redirect);
  } catch (error) {
    const { message } = error;
    dispatch(crudFailed(message));
  }
};

export const toggleBookmark = (userId, favId) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const currentUser = getState().users.entities.find((u) => u.id === userId);
  let newFav = currentUser.favourites ? [...currentUser?.favourites] : [];
  if (currentUser.favourites?.includes(favId)) {
    newFav = newFav.filter((id) => id !== favId);
  } else {
    newFav.push(favId);
  }
  const newUser = { ...currentUser, favourites: newFav };
  try {
    const data = await usersService.patchUser(userId, newUser);
    console.log(data);
    dispatch(updated({ id: userId, data }));
  } catch (error) {
    const { message } = error;
    dispatch(crudFailed(message));
  }
};

export const getUsers = () => (state) => {
  return state.users.entities;
};

export const getUserById = (id) => (state) => {
  return state.users.entities && state.users.entities.find((user) => user.id === id);
};

export const getAccountData = () => (state) => {
  return (
    state.users.entities && state.users.entities.find((user) => user.id === state.auth.accountId)
  );
};

export const getUsersLoadingStatus = () => (state) => {
  return state.users.isLoading;
};

export const getTeamMembers = () => (state) => {
  return (
    state.users.entities &&
    state.users.entities.filter((user) => user.status === UserStatusConstants.TeamMember)
  );
};

export const getCandidates = () => (state) => {
  return (
    state.users.entities &&
    state.users.entities.filter((user) => user.status === UserStatusConstants.Candidate)
  );
};

export const getFavourites = (id) => (state) => {
  const currentUser = state.users.entities.find((u) => u.id === id);
  const favUsers = state.users?.entities.filter((u) => currentUser.favourites?.includes(u.id));
  return favUsers;
};

export const getUsersError = () => (state) => {
  return state.users.error;
};

const usersReducer = usersSlice.reducer;
export default usersReducer;
