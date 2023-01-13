import { useRoutes } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import { guestRoutes, privateRoutes } from '~/router/routerList';

export const AppRouter = () => {
  const { user } = useAuth();

  return useRoutes(user?.id ? privateRoutes : guestRoutes);
};
