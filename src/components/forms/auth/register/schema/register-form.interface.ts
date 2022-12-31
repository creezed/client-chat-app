import { IRegisterUser } from "@components/forms/auth/register";
import * as yup from "yup";

export const registerFormSchema = yup.object<Record<keyof IRegisterUser, yup.AnySchema>>().shape({
    email: yup.string().email("Почта введена некорректно").required("Обязательное поле"),
    password: yup
        .string()
        .min(6, "Минимум 6 символов")
        .max(14, "Максимум 14 символов")
        .required("Обязательное поле"),
    firstName: yup
        .string()
        .min(4, "Минимум 4 символа")
        .max(8, "Максимум 8 символов")
        .required("Обязательное поле"),
    lastName: yup
        .string()
        .min(4, "Минимум 6 символов")
        .max(12, "Максимум 14 символов")
        .required("Обязательное поле")
});
