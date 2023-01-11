import { Avatar, Checkbox, Flex, Radio, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IUserChoice {
  id: string;
  firstName: string;
  lastName: string;
  type: 'checkbox' | 'radio';
}

export const UserChoice: FC<IUserChoice> = ({
  id,
  firstName,
  lastName,
  type,
}) => {
  return (
    <li>
      <Flex
        justify="space-between"
        align="center"
        as="label"
        padding="8px 12px"
        cursor="pointer"
        borderRadius="10px"
        userSelect="none"
        _hover={{ backgroundColor: 'gray.50' }}
      >
        <Flex gap={4} align="center">
          <Avatar size="sm" />
          <Text noOfLines={1} fontWeight={500}>
            {firstName} {lastName}
          </Text>
        </Flex>
        {type === 'radio' && <Radio value={id} colorScheme="whatsapp" />}
        {type === 'checkbox' && <Checkbox value={id} colorScheme="whatsapp" />}
      </Flex>
    </li>
  );
};
