import {
  IoChatboxOutline,
  IoExitOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

interface SidebarNavItem {
  link: string;
  title: string;
  icon: IconType;
}

export const sidebarNavFirstData: SidebarNavItem[] = [
  {
    link: '/conversation',
    title: 'Chats',
    icon: IoChatboxOutline,
  },
  {
    link: '/profile',
    title: 'Profile',
    icon: IoPersonOutline,
  },
  {
    link: '/friends',
    title: 'Friends',
    icon: IoPeopleOutline,
  },
  {
    link: '/login',
    title: 'Exit',
    icon: IoExitOutline,
  },
];

export const sidebarNavSecondData: SidebarNavItem[] = [
  {
    link: '/notifications',
    title: 'Notifications',
    icon: IoNotificationsOutline,
  },
  {
    link: '/setting',
    title: 'Setting',
    icon: IoSettingsOutline,
  },
];
