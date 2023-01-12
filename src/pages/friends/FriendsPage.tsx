import { lazy } from 'react';

export const FriendsPage = () => {
  return <div>2</div>;
};

// eslint-disable-next-line import/no-default-export
export default FriendsPage;

export const FriendsPageLazy = lazy(
  () => import('~/pages/friends/FriendsPage'),
);
