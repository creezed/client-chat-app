import { Flex, Icon, ScaleFade, Text, useDisclosure } from '@chakra-ui/react';
import { lazy } from 'react';
import { BsChatText } from 'react-icons/bs';
import { CreateConversationModal } from '~/components/modals/createConversationModal';

const ConversationPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="full"
      h="full"
      justify="center"
      align="center"
      as="section"
      backgroundColor="gray.50"
    >
      <ScaleFade in>
        <Flex flexDir="column" align="center">
          <Icon mb={4} as={BsChatText} fontSize="3rem" color="gray.600" />
          <Text fontSize="lg" color="gray.500">
            Выберите чат
          </Text>
          <Text fontSize="lg" color="gray.500">
            или
          </Text>
          <Text
            onClick={onOpen}
            cursor="pointer"
            fontSize="lg"
            color="whatsapp.700"
          >
            создайте новый
          </Text>
        </Flex>
      </ScaleFade>
      <CreateConversationModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default ConversationPage;

export const ConversationPageLazy = lazy(
  () => import('~/pages/conversation/ConversationPage'),
);
