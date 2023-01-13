import { lazy } from 'react';
import { FriendsRequests } from '~/components/friendsPanel';

const FriendsRequestsPage = () => {
  return <FriendsRequests />;
};

// eslint-disable-next-line import/no-default-export
export default FriendsRequestsPage;

export const FriendsRequestsPageLazy = lazy(
  () => import('~/pages/friends/requests/FriendsRequestsPage'),
);
