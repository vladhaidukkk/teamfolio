import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import usersReducer from './users';
import testimonialsReducer from './testimonials';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  testimonials: testimonialsReducer,
});

export default rootReducer;
