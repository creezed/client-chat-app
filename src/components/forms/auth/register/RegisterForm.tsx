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
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IRegisterUser } from '~/components/forms/auth/register/interface/register-form.interface';
import { registerFormSchema } from '~/components/forms/auth/register/schema';
import { useActions } from '~/hooks/redux/useActions';
import { useTypedSelector } from '~/hooks/redux/useTypedSelector';

export const RegisterForm = () => {
  const { registration } = useActions();
  const [showPassword, setShowPassword] = useState(false);
  const { status } = useTypedSelector(state => state.auth);
  const handleClick = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    mode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (data: IRegisterUser) => {
    registration(data);
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
          placeholder="Email"
          type="email"
          colorScheme="messenger"
          borderRadius={14}
          size="lg"
          {...register('email')}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Flex mt={2} gap={2}>
        <FormControl isInvalid={!!errors.firstName}>
          <Input
            placeholder="First name"
            autoComplete="given-name"
            colorScheme="messenger"
            borderRadius={14}
            size="lg"
            {...register('firstName')}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.lastName}>
          <Input
            placeholder="Last name"
            autoComplete="family-name"
            colorScheme="messenger"
            borderRadius={14}
            size="lg"
            {...register('lastName')}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <FormControl mt={2} isInvalid={!!errors.password}>
        <InputGroup>
          <Input
            colorScheme="messenger"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="current-password"
            borderRadius={14}
            size="lg"
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
        mt={1.5}
        colorScheme="messenger"
        borderRadius={14}
        size="lg"
        type="submit"
        isLoading={status === 'pending'}
        loadingText="registration..."
      >
        Create My Account
      </Button>
      <Flex mt={1.5} justifyContent="center" gap={2}>
        <Text fontSize="lg">Already have an account?</Text>
        <Text fontSize="lg" as="ins">
          <Link to="/login">Login</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
