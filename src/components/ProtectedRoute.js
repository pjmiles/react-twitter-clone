// import { useAuth } from "../hooks/AuthContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// component to check the state of our user from the useAuth hooh
const ProtectedRoutes = () => {
  const athenticatedUser = localStorage.getItem("logDetails");
  console.log(athenticatedUser)
  return (
    athenticatedUser ? <Outlet /> : <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
