import { Flex } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Message } from '~/components/room/message/Message';

interface IChat {
  from: 'me' | number;
  message: string;
}

export const Chat = () => {
  const [messages] = useState<IChat[]>([
    { from: 1, message: 'Hi, My Name is HoneyChat' },
    { from: 'me', message: 'Hey there' },
    { from: 2, message: 'Hi, My Name is HoneyChat' },
    { from: 'me', message: 'Hey there' },
    { from: 'me', message: 'Myself Ferin Patel' },
    {
      from: 3,
      message:
        "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);

  return (
    <Flex
      as="section"
      flexGrow={1}
      flexDirection="column"
      gap={24}
      overflowY="auto"
      padding={12}
      width="full"
    >
      {messages.map(message => (
        <Message from={message.from} key={nanoid()} />
      ))}
    </Flex>
  );
};
