import * as yup from 'yup';
import { ICreateDirect } from '~/components/forms/conversation/interfaces';

export const createDirectFormSchema = yup
  .object<Record<keyof ICreateDirect, yup.AnySchema>>()
  .shape({
    recipientId: yup.number().required('Required field'),
  });
