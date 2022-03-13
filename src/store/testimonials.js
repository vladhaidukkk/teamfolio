import { createAction, createSlice } from '@reduxjs/toolkit';
import { testimonialsService } from '../services';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    requested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    received: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
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
    crudFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { requested, received, failed, created, crudFailed } = testimonialsSlice.actions;
const createRequested = createAction('testimonials/createRequested');

export const loadTestimonials = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await testimonialsService.getTestimonials();
    dispatch(received(data));
  } catch (error) {
    const { message } = error;
    dispatch(failed(message));
  }
};

export const createTestimonial = (id, payload) => async (dispatch) => {
  dispatch(createRequested());
  try {
    const data = await testimonialsService.createTestimonial(id, payload);
    dispatch(created(data));
  } catch (error) {
    const { message } = error;
    dispatch(crudFailed(message));
  }
};

export const getTestimonials = () => (state) => {
  return state.testimonials.entities;
};

export const getTestimonialsLoadingStatus = () => (state) => {
  return state.testimonials.isLoading;
};

export const getTestimonialsError = () => (state) => {
  return state.testimonials.error;
};

const testimonialsReducer = testimonialsSlice.reducer;
export default testimonialsReducer;
