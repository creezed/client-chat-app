import { useTypedSelector } from './redux/useTypedSelector';

export const useAuth = () => useTypedSelector(state => state.auth);
