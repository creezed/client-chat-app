import { ILoginUser } from "@components/forms/auth/login";
import * as yup from "yup";

export const loginFormSchema = yup.object<Record<keyof ILoginUser, yup.AnySchema>>().shape({
    email: yup.string().email("Почта введена некорректно").required("Обязательное поле"),
    password: yup.string().min(6, "Минимум 6 символов").max(14, "Максимум 14 символов")
});
