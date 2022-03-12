import { createSlice } from '@reduxjs/toolkit';
import { usersService } from '../services';
import { UserStatusConstants } from '../utils/constants';

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
  },
});

const { requested, received, failed } = usersSlice.actions;

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

export const getUsers = () => (state) => {
  return state.users.entities;
};

export const getUserById = (id) => (state) => {
  return state.users.entities && state.users.entities.find((user) => user.id === id);
};

// не знаю что єто воопше такое
export const getCurrentUserId = () => (state) => state.users;

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

const usersReducer = usersSlice.reducer;
export default usersReducer;
