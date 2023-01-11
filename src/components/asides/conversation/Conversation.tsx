import {
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { BiSearch } from 'react-icons/bi';
import { IoCreateOutline } from 'react-icons/io5';
import { ConversationCard } from '~/components/asides/conversation/conversationCard';
import { CreateConversationModal } from '~/components/asides/conversation/createConversationModal';

export const Conversation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="aside"
      flexDirection="column"
      borderRight="1px"
      maxHeight="full"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Flex
        as="header"
        flexDirection="column"
        gap={6}
        padding="24px 24px 0 24px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading color="blackAlpha.800" as="h2" size="xl" noOfLines={1}>
            Messages
          </Heading>
          <Icon
            as={IoCreateOutline}
            fontSize="2xl"
            color="whatsapp.700"
            cursor="pointer"
            onClick={onOpen}
          />
        </Flex>

        <InputGroup>
          <InputLeftElement height="full" pointerEvents="none">
            <Icon as={BiSearch} />
          </InputLeftElement>
          <Input
            placeholder="Search"
            borderRadius="12px"
            focusBorderColor="whatsapp.700"
            variant="filled"
            size="lg"
          />
        </InputGroup>
      </Flex>

      <Flex
        mt={10}
        as="ul"
        maxHeight="full"
        flexDirection="column"
        overflowY="auto"
      >
        {Array.from({ length: 10 }).map(() => (
          <ConversationCard key={nanoid()} id={nanoid()} />
        ))}
      </Flex>
      <CreateConversationModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
