import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// creating the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("user", null);
  const navigate = useNavigate();

  // function to authenticate user if logged in
  const login = async (data) => {
    setUser(data);
    navigate("/profile");
  };

  // function to be called when user is not logged in
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// using the context created
export const useAuth = () => {
  return useContext(AuthContext);
};
