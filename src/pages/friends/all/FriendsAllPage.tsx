import { lazy } from 'react';
import { FriendsAll } from '~/components/friendsPanel';

const FriendsAllPage = () => {
  return <FriendsAll />;
};

// eslint-disable-next-line import/no-default-export
export default FriendsAllPage;

export const FriendsAllPageLazy = lazy(
  () => import('~/pages/friends/all/FriendsAllPage'),
);
