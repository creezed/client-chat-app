import { Container } from '@chakra-ui/react';
import { lazy } from 'react';
import { RegisterForm } from '~/components/forms/auth';

const RegistrationPage = () => {
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
      <RegisterForm />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default RegistrationPage;

export const RegistrationPageLazy = lazy(
  () => import('~/pages/registration/RegistrationPage'),
);
