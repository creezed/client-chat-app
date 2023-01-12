import { Button, Flex, Icon, ScaleFade, Text } from '@chakra-ui/react';
import { lazy } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Flex w="full" h="full" justify="center" align="center">
      <ScaleFade in>
        <Flex flexDir="column" align="center">
          <Text color="gray.500" fontWeight={700} fontSize="4rem">
            404
          </Text>
          <Button
            leftIcon={<Icon as={AiOutlineArrowLeft} />}
            colorScheme="whatsapp"
            variant="solid"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default ErrorPage;

export const ErrorPageLazy = lazy(() => import('~/pages/404/ErrorPage'));
