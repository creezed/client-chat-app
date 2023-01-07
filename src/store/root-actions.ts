import * as authActions from './auth/auth.actions';
import { authSlice } from '~/store/auth/auth.slice';

export const rootActions = {
  ...authActions,
  ...authSlice.actions,
};
