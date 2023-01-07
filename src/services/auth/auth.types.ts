import { IUser } from '~/utils/types';

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
