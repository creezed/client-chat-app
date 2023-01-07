import * as yup from 'yup';
import { ILoginUser } from '~/components/forms/auth/login/interface';

export const loginFormSchema = yup
  .object<Record<keyof ILoginUser, yup.AnySchema>>()
  .shape({
    email: yup
      .string()
      .email('Email entered incorrectly')
      .required('Required field'),
    password: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(14, 'Maximum 14 characters')
      .required('Required field'),
  });
