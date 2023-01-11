import { Avatar, Flex, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as routerLink } from 'react-router-dom';

interface IConversationCard {
  id: string;
}

export const ConversationCard: FC<IConversationCard> = ({ id }) => {
  return (
    <Link
      as={routerLink}
      to={`/conversation/${id}`}
      paddingY={4}
      cursor="pointer"
      backgroundColor="transparent"
      _hover={{ textDecoration: 'none', backgroundColor: 'gray.50' }}
    >
      <Flex
        justifyContent="space-between"
        width="100%"
        gap={4}
        padding="8px 24px"
        as="figure"
      >
        <Avatar />
        <Flex as="figcaption" flexDirection="column" flex={1}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text noOfLines={1} fontWeight={700} color="blackAlpha.800">
              Егор Дедюков
            </Text>
            <Text noOfLines={1} color="blackAlpha.400">
              4:30 PM
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text noOfLines={1} color="blackAlpha.900">
              Great!
            </Text>
            <Flex
              width="16px"
              height="16px"
              borderRadius="50%"
              backgroundColor="red.400"
              justifyContent="center"
              alignItems="center"
              color="white"
              userSelect="none"
              fontSize={10}
            >
              1
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
