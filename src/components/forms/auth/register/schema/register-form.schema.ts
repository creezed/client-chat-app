import * as yup from 'yup';
import { IRegisterUser } from '~/components/forms/auth/register/interface';

export const registerFormSchema = yup
  .object<Record<keyof IRegisterUser, yup.AnySchema>>()
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
    firstName: yup
      .string()
      .min(4, 'Minimum 4 characters')
      .max(8, 'Maximum 8 characters')
      .required('Required field'),
    lastName: yup
      .string()
      .min(4, 'Minimum 6 characters')
      .max(12, 'Maximum 14 characters')
      .required('Required field'),
  });
