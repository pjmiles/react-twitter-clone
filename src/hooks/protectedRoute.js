import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

// component to check the state of our user from the useAuth hooh
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    Navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
