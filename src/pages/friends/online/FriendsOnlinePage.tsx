import { lazy } from 'react';
import { FriendsOnline } from '~/components/friendsPanel';

const FriendsOnlinePage = () => {
  return <FriendsOnline />;
};

// eslint-disable-next-line import/no-default-export
export default FriendsOnlinePage;

export const FriendsOnlinePageLazy = lazy(
  () => import('~/pages/friends/online/FriendsOnlinePage'),
);
