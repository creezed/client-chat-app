import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedRoute {
  isAuth: boolean;
  redirectPath: string;
}

export const ProtectedRoute = ({
  isAuth,
  redirectPath = '/registration',
}: IProtectedRoute) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
