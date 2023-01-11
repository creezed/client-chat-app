import { Avatar, Box, Divider, Flex, Icon } from '@chakra-ui/react';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { sidebarNavFirstData, sidebarNavSecondData } from '~/layout/data';
import { SidebarItem } from '~/layout/sidebar/sidebarItem';
import { isLinkSelected } from '~/utils/helpers/link-selected/link-selected';

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Flex
      padding="20px"
      height="full"
      width="full"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="whatsapp.700"
      as="nav"
    >
      <Box>
        <Icon mb={12} width="full" fontSize="2xl" color="white">
          <IoChatbubbleEllipsesSharp />
        </Icon>
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          as="nav"
          gap={2}
        >
          {sidebarNavFirstData.map(navItem => (
            <SidebarItem
              key={navItem.link}
              icon={navItem.icon}
              title={navItem.title}
              link={navItem.link}
              selected={isLinkSelected(pathname, navItem.link)}
            />
          ))}
        </Flex>
      </Box>

      <Flex
        flexDir="column"
        width="full"
        alignItems="center"
        mb={4}
        gap={2}
        as="nav"
      >
        {sidebarNavSecondData.map(navItem => (
          <SidebarItem
            key={navItem.link}
            icon={navItem.icon}
            title={navItem.title}
            link={navItem.link}
            selected={pathname === navItem.link}
          />
        ))}
        <Divider my={8} width="70%" borderColor="whiteAlpha.700" />
        <Avatar
          size="md"
          src="https://bit.ly/ryan-florence"
          borderRadius="16px"
        />
      </Flex>
    </Flex>
  );
};
