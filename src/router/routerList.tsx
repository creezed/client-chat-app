import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '~/layout';
import { ErrorPageLazy } from '~/pages/404/ErrorPage';
import { ConversationPageLazy } from '~/pages/conversation/ConversationPage';
import { FriendsAddPageLazy } from '~/pages/friends/add/FriendsAddPage';
import { FriendsAllPageLazy } from '~/pages/friends/all/FriendsAllPage';
import { FriendsBlockedPageLazy } from '~/pages/friends/blocked/FriendsBlockedPage';
import { FriendsPageLazy } from '~/pages/friends/FriendsPage';
import { FriendsOnlinePageLazy } from '~/pages/friends/online/FriendsOnlinePage';
import { FriendsRequestsPageLazy } from '~/pages/friends/requests/FriendsRequestsPage';
import { LoginPageLazy } from '~/pages/login/LoginPage';
import { RegistrationPageLazy } from '~/pages/registration/RegistrationPage';
import { RoomPageLazy } from '~/pages/room/RoomPage';
import { Routes } from '~/types/routes';

export const privateRoutes: RouteObject[] = [
  {
    path: Routes.INDEX,
    element: <Layout />,
    children: [
      {
        path: Routes.CONVERSATION,
        element: <ConversationPageLazy />,
      },
      {
        path: Routes.ROOM,
        element: <RoomPageLazy />,
      },
      {
        path: Routes.FRIENDS,
        element: <FriendsPageLazy />,
        children: [
          { index: true, element: <Navigate to="online" replace /> },
          { path: Routes.FRIENDS_ADD, element: <FriendsAddPageLazy /> },
          { path: Routes.FRIENDS_ALL, element: <FriendsAllPageLazy /> },
          { path: Routes.FRIENDS_BLOCKED, element: <FriendsBlockedPageLazy /> },
          { path: Routes.FRIENDS_ONLINE, element: <FriendsOnlinePageLazy /> },
          {
            path: Routes.FRIENDS_REQUESTS,
            element: <FriendsRequestsPageLazy />,
          },
        ],
      },
    ],
  },
  { path: Routes.ERROR, element: <ErrorPageLazy /> },
];

export const guestRoutes: RouteObject[] = [
  { path: Routes.LOGIN, element: <LoginPageLazy /> },
  { path: Routes.REGISTRATION, element: <RegistrationPageLazy /> },
  { path: Routes.ERROR, element: <ErrorPageLazy /> },
];
