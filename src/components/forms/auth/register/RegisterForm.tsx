import { useActions } from "../../../../hooks/redux/useActions";
import { useTypedSelector } from "../../../../hooks/redux/useTypedSelector";
import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import { IRegisterUser } from "@components/forms/auth/register/register-form.interface";
import { registerFormSchema } from "@components/forms/auth/register/schema/register-form.interface";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

import authStyle from "components/forms/auth/auth.module.scss";
import indexStyle from "components/forms/index.module.scss";

export const RegisterForm = () => {
    const { registration } = useActions();
    const [showPassword, setShowPassword] = useState(false);
    const { status } = useTypedSelector(state => state.auth);
    const handleClick = () => setShowPassword(!showPassword);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegisterUser>({
        mode: "onChange",
        resolver: yupResolver(registerFormSchema)
    });

    const onSubmit = (data: IRegisterUser) => {
        registration(data);
    };

    return (
        <form
            className={classNames(indexStyle.Form, indexStyle.FormSpaceMedium, authStyle.AuthForm)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl isInvalid={!!errors.email}>
                <Input placeholder={"Почта"} type={"email"} {...register("email")} />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            <div className={classNames(indexStyle.FormRow, indexStyle.FormSpaceMedium)}>
                <FormControl isInvalid={!!errors.firstName}>
                    <Input
                        placeholder={"Имя"}
                        {...register("firstName")}
                        autoComplete={"given-name"}
                    />
                    <FormErrorMessage>
                        {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName}>
                    <Input
                        placeholder={"Фамилия"}
                        {...register("lastName")}
                        autoComplete={"family-name"}
                    />
                    <FormErrorMessage>
                        {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                </FormControl>
            </div>
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
                colorScheme={"blue"}
                type={"submit"}
                isLoading={status === "pending"}
                loadingText={"registration..."}
            >
                Зарегистрироваться
            </Button>
            <label
                className={classNames(
                    indexStyle.FormRow,
                    indexStyle.FormSpaceMedium,
                    "jc-sb",
                    "ai-c"
                )}
            >
                <Text fontSize='md'>Уже есть аккаунт?</Text>
                <Link to={"/login"}>Войти</Link>
            </label>
        </form>
    );
};
