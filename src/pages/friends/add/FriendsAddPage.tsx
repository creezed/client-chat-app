import { lazy } from 'react';
import { AddToFriendsList } from '~/components/friendsPanel';

const FriendsAddPage = () => {
  return <AddToFriendsList />;
};

// eslint-disable-next-line import/no-default-export
export default FriendsAddPage;

export const FriendsAddPageLazy = lazy(
  () => import('~/pages/friends/add/FriendsAddPage'),
);
