import { useActions } from "../../../../hooks/redux/useActions";
import { useTypedSelector } from "../../../../hooks/redux/useTypedSelector";
import { ILoginUser } from "./login-form.interface";
import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

import authStyle from "components/forms/auth/auth.module.scss";
import { loginFormSchema } from "components/forms/auth/login/schema/login-form.schema";
import indexStyle from "components/forms/index.module.scss";

export const LoginForm = () => {
    const { login } = useActions();
    const { status } = useTypedSelector(state => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginUser>({
        mode: "onChange",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = (data: ILoginUser) => {
        login(data);
    };

    return (
        <form
            className={classNames(indexStyle.Form, indexStyle.FormSpaceMedium, authStyle.AuthForm)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl isInvalid={!!errors.email}>
                <Input
                    {...register("email")}
                    placeholder={"Почта"}
                    type={"email"}
                    autoComplete={"email"}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
                <InputGroup>
                    <Input
                        pr='4.5rem'
                        type={showPassword ? "text" : "password"}
                        placeholder='Введите пароль'
                        autoComplete={"current-password"}
                        {...register("password")}
                    />
                    <InputRightElement
                        width='2.5rem'
                        onClick={handleClick}
                        cursor={"pointer"}
                        style={{ userSelect: "none" }}
                    >
                        {showPassword ? (
                            <AiOutlineEye className={authStyle.AuthFormPasswordIcon} />
                        ) : (
                            <AiOutlineEyeInvisible className={authStyle.AuthFormPasswordIcon} />
                        )}
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>

            <Button
                colorScheme='blue'
                type='submit'
                isLoading={status === "pending"}
                loadingText='login'
            >
                Войти
            </Button>
            <label
                className={classNames(
                    indexStyle.FormRow,
                    indexStyle.FormSpaceMedium,
                    "jc-sb",
                    "ai-c"
                )}
            >
                <Text fontSize='md'>Нету аккаунта?</Text>
                <Link to={"/registration"}>Зарегистрироваться</Link>
            </label>
        </form>
    );
};
