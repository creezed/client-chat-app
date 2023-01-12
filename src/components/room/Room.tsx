import { Flex } from '@chakra-ui/react';
import { Chat } from '~/components/room/chat';
import { Header } from '~/components/room/header';
import { NewMessage } from '~/components/room/newMessage';

export const Room = () => {
  return (
    <Flex
      as="section"
      flexDirection="column"
      height="full"
      maxHeight="100vh"
      backgroundColor="gray.50"
    >
      <Header />
      <Chat />
      <NewMessage />
    </Flex>
  );
};
