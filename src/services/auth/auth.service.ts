import { AxiosResponse } from 'axios';
import { axiosPublic } from '~/api/axios';
import {
  AuthResponse,
  ILoginData,
  IRegistrationData,
} from '~/services/auth/auth.types';

export const AuthService = {
  async registration(
    data: IRegistrationData,
  ): Promise<AxiosResponse<AuthResponse>> {
    return axiosPublic.post<AuthResponse>('/auth/register', data);
  },

  async login(data: ILoginData): Promise<AxiosResponse<AuthResponse>> {
    return axiosPublic.post<AuthResponse>('/auth/login', data);
  },
};
