import { createSlice } from '@reduxjs/toolkit';
import { login, registration } from '~/store/auth/auth.actions';
import { IUser } from '~/types/user';

interface IAuthInitialState {
  token: string | null;
  user: IUser | null;
  status: 'pending' | 'fulfilled' | 'rejected' | 'init';
}

const initialState: IAuthInitialState = {
  token: null,
  user: null,
  status: 'init',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'init';
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(registration.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addCase(registration.rejected, state => {
      state.status = 'rejected';
      state.token = null;
      state.user = null;
    });
    builder.addCase(login.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addCase(login.rejected, state => {
      state.status = 'rejected';
      state.token = null;
      state.user = null;
    });
  },
});
