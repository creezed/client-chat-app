import { RouteProps } from 'react-router-dom';
import { ConversationPageLazy } from '~/pages/conversation/ConversationPage';
import { FriendsPageLazy } from '~/pages/friends/FriendsPage';
import { LoginPageLazy } from '~/pages/login/LoginPage';
import { RegistrationPageLazy } from '~/pages/registration/RegistrationPage';
import { RoomPageLazy } from '~/pages/room/RoomPage';

export const privateRoutes: RouteProps[] = [
  {
    path: '/conversation',
    element: <ConversationPageLazy />,
  },
  {
    path: '/conversation/:id',
    element: <RoomPageLazy />,
  },
  { path: '/friends', element: <FriendsPageLazy /> },
];

export const guestRoutes: RouteProps[] = [
  { path: '/login', element: <LoginPageLazy /> },
  { path: '/registration', element: <RegistrationPageLazy /> },
];
