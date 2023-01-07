import { Container } from '@chakra-ui/react';
import { lazy } from 'react';
import { LoginForm } from '~/components/forms/auth';

const LoginPage = () => {
  return (
    <Container
      maxWidth="1200px"
      as="section"
      height="100vh"
      width="full"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <LoginForm />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginPage;

export const LoginPageLazy = lazy(() => import('~/pages/login/LoginPage'));
