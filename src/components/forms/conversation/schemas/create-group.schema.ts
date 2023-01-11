import * as yup from 'yup';
import { ICreateGroup } from '~/components/forms/conversation/interfaces';

export const createGroupFormSchema = yup
  .object<Record<keyof ICreateGroup, yup.AnySchema>>()
  .shape({
    recipientsId: yup
      .array()
      .of(yup.string())
      .min(2)
      .required('Required field'),
  });
