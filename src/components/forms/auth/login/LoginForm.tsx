/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ILoginUser } from '~/components/forms/auth/login/interface';
import { loginFormSchema } from '~/components/forms/auth/login/schema';
import { useActions } from '~/hooks/redux/useActions';
import { useTypedSelector } from '~/hooks/redux/useTypedSelector';

export const LoginForm = () => {
  const { login } = useActions();
  const { status } = useTypedSelector(state => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: ILoginUser) => {
    login(data);
  };

  return (
    <Flex
      as="form"
      flexDirection="column"
      width="full"
      maxWidth="450px"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.email}>
        <Input
          placeholder="email"
          type="email"
          borderRadius={14}
          size="lg"
          colorScheme="messenger"
          autoComplete="email"
          {...register('email')}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={2} isInvalid={!!errors.password}>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            colorScheme="messenger"
            borderRadius={14}
            size="lg"
            autoComplete="current-password"
            {...register('password')}
          />
          <InputRightElement
            width="3rem"
            onClick={handleClick}
            cursor="pointer"
            height="full"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        colorScheme="messenger"
        mt={1.5}
        type="submit"
        borderRadius={14}
        size="lg"
        isLoading={status === 'pending'}
        loadingText="login"
      >
        Login
      </Button>
      <Flex mt={1.5} justifyContent="center" gap={2}>
        <Text fontSize="lg">Don&apos;t have an account?</Text>
        <Text fontSize="lg" as="ins">
          <Link to="/registration">Register</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
