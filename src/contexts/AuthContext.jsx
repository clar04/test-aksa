import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();
const CREDENTIAL = { username: 'admin', password: 'password123' };

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);

  const login = (username, password) => {
    if (username === CREDENTIAL.username && password === CREDENTIAL.password) {
      setUser({ username, fullName: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);
  const editProfile = (fullName) => setUser((u) => ({ ...u, fullName }));

  return (
    <AuthContext.Provider value={{ user, login, logout, editProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
