import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsTelephone } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="72px"
      backgroundColor="white"
      borderBottom="1px"
      borderColor="chakra-border-color"
      as="header"
      paddingX={8}
      flexShrink={0}
    >
      <Flex as="figure" gap={4}>
        <Avatar size="md" />
        <Flex as="figcaption" flexDirection="column">
          <Text fontWeight={700} noOfLines={1}>
            Егор Дедюков
          </Text>
          <Text color="gray.400" noOfLines={1}>
            last seen 16 minutes ago
          </Text>
        </Flex>
      </Flex>
      <Flex as="nav" gap={4}>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="40px"
          width="40px"
          cursor="pointer"
          borderRadius="10px"
          userSelect="none"
          color="blackAlpha.800"
          transition=".15s ease-in"
          _hover={{ bg: 'gray.200' }}
          _active={{ bg: 'gray.300' }}
        >
          <Icon as={BsTelephone} fontSize="xl" />
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HiDotsVertical />}
            aria-label="Options"
            variant="outline"
            borderRadius="10px"
          />
          <MenuList borderRadius="10px">
            <MenuItem command="⌘T">New Tab</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
