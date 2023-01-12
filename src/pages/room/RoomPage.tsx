import { lazy } from 'react';
import { Room } from '~/components/room';

const RoomPage = () => {
  return <Room />;
};

// eslint-disable-next-line import/no-default-export
export default RoomPage;

export const RoomPageLazy = lazy(() => import('~/pages/room/RoomPage'));
