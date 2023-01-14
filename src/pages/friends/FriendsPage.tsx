import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { lazy, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '~/types/routes';

interface ITab {
  link: string;
  label: string;
}

const tabs: ITab[] = [
  { label: 'Online', link: Routes.FRIENDS_ONLINE },
  { label: 'All', link: Routes.FRIENDS_ALL },
  { label: 'Requests', link: Routes.FRIENDS_REQUESTS },
  { label: 'Blocked', link: Routes.FRIENDS_BLOCKED },
  { label: 'Add to friends list', link: Routes.FRIENDS_ADD },
];

export const FriendsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [indexTab, setTabIndex] = useState<number>(() =>
    tabs.findIndex(tab => tab.link === location.pathname),
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
          {tabs.map(tab => (
            <Tab
              as="li"
              cursor="pointer"
              onClick={() => navigate(tab.link)}
              key={tab.link}
            >
              {tab.label}
            </Tab>
          ))}
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
