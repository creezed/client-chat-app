import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { lazy, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '~/types/routes';

type TabsUrlsTuple = [
  Routes.FRIENDS_ONLINE,
  Routes.FRIENDS_ALL,
  Routes.FRIENDS_REQUESTS,
  Routes.FRIENDS_BLOCKED,
  Routes.FRIENDS_ADD,
];

type LocationPath =
  | Routes.FRIENDS_ONLINE
  | Routes.FRIENDS_ALL
  | Routes.FRIENDS_REQUESTS
  | Routes.FRIENDS_BLOCKED
  | Routes.FRIENDS_ADD;

const tabsUrls: TabsUrlsTuple = [
  Routes.FRIENDS_ONLINE,
  Routes.FRIENDS_ALL,
  Routes.FRIENDS_REQUESTS,
  Routes.FRIENDS_BLOCKED,
  Routes.FRIENDS_ADD,
];

export const FriendsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname as LocationPath;

  const [indexTab, setTabIndex] = useState<number>(() =>
    tabsUrls.includes(path) ? tabsUrls.indexOf(path) : 0,
  );

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Flex as="section" p={4} flexDirection="column">
      <Tabs
        variant="soft-rounded"
        colorScheme="whatsapp"
        as="nav"
        index={indexTab}
        onChange={handleTabsChange}
      >
        <TabList as="ul">
          <Tab
            as="li"
            cursor="pointer"
            onClick={() => navigate('/friends/online')}
          >
            Online
          </Tab>
          <Tab
            as="li"
            cursor="pointer"
            onClick={() => navigate('/friends/all')}
          >
            All
          </Tab>
          <Tab
            as="li"
            cursor="pointer"
            onClick={() => navigate('/friends/requests')}
          >
            Requests
          </Tab>
          <Tab
            as="li"
            cursor="pointer"
            onClick={() => navigate('/friends/blocked')}
          >
            Blocked
          </Tab>
          <Tab
            as="li"
            cursor="pointer"
            onClick={() => navigate('/friends/add')}
          >
            Add to friends list
          </Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default FriendsPage;

export const FriendsPageLazy = lazy(
  () => import('~/pages/friends/FriendsPage'),
);
