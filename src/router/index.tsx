import { Route, Routes } from 'react-router-dom';
import { Room } from '~/components/room';
import { useAuth } from '~/hooks/useAuth';
import { ConversationPageLazy } from '~/pages/conversation/ConversationPage';
import { LoginPageLazy } from '~/pages/login/LoginPage';
import { RegistrationPageLazy } from '~/pages/registration/RegistrationPage';
import { ProtectedRoute } from '~/router/ProtectedRoute';

export const AppRouter = () => {
  const user = useAuth();
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAuth={!user.token} redirectPath="/conversation" />
        }
      >
        <Route path="/login" element={<LoginPageLazy />} />
        <Route path="/registration" element={<RegistrationPageLazy />} />
      </Route>
      <Route
        element={
          <ProtectedRoute isAuth={Boolean(user.token)} redirectPath="/login" />
        }
      >
        <Route path="/conversation" element={<ConversationPageLazy />}>
          <Route path=":id" element={<Room />} />
        </Route>
      </Route>
    </Routes>
  );
};
