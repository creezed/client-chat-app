import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '~/store/auth/auth.slice';

export const rootReducers = combineReducers({
  auth: authSlice.reducer,
});
