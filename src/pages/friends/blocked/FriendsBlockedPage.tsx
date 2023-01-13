import { lazy } from 'react';
import { FriendsBlocked } from '~/components/friendsPanel';

const FriendsBlockedPage = () => {
  return <FriendsBlocked />;
};

// eslint-disable-next-line import/no-default-export
export default FriendsBlockedPage;

export const FriendsBlockedPageLazy = lazy(
  () => import('~/pages/friends/blocked/FriendsBlockedPage'),
);
