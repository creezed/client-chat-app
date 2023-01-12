import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/layout';
import { useAuth } from '~/hooks/useAuth';
import { ErrorPageLazy } from '~/pages/404/ErrorPage';
import { guestRoutes, privateRoutes } from '~/router/routerList';

export const AppRouter = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {user?.id ? (
        <Route element={<Layout />}>
          {privateRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<ErrorPageLazy />} />
        </Route>
      ) : (
        guestRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      )}
    </Routes>
  );
};
