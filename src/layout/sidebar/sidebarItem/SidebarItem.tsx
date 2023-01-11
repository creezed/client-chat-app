import { Flex, Icon, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

interface ISidebarItem {
  icon: IconType;
  title: string;
  selected?: boolean;
  link: string;
}

export const SidebarItem: FC<ISidebarItem> = ({
  icon,
  title,
  link,
  selected = false,
}) => {
  return (
    <Tooltip label={title} placement="right">
      <Link to={link}>
        <Flex
          display="flex"
          height="60px"
          width="60px"
          justifyContent="center"
          alignItems="center"
          borderRadius="16px"
          backgroundColor={selected ? 'white' : 'transparent'}
          color={selected ? 'blackAlpha.800' : 'whiteAlpha.800'}
          transition=".15s ease-in"
          cursor="pointer"
          _hover={{ bg: 'white', color: 'blackAlpha.800' }}
        >
          <Icon as={icon} fontSize="2xl" />
        </Flex>
      </Link>
    </Tooltip>
  );
};
