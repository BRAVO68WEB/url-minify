import { createContext } from "react";
import { useState } from "react";

const UserAuth = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser("default");
  };

  const logout = () => {
    setUser(null);
  };
  const context = { user, login, logout };

  return <UserAuth.Provider value={context}>{children}</UserAuth.Provider>;
};

export default UserAuth;
