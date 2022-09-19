import { useAuth } from "../hooks/AuthContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// component to check the state of our user from the useAuth hooh
const ProtectedRoutes = () => {
  const athenticatedUser = JSON.parse(localStorage.getItem("logDetails"));
  return athenticatedUser ? <Outlet /> : Navigate("/login");
};

export default ProtectedRoutes;
