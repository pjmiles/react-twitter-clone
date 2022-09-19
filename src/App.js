import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import LoginForm from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUp";
import { useState, createContext } from "react";
import ProtectedRoutes from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  // const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  // const [authUser, setAuthUser] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  // const Authenticated = createContext(authUser);

  return (
    <div className="app">
      {/* <Authenticated.Provider value={{ authUser }}> */}
      {/* <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<SideBar />} />
          <Route path="/profile" element={<ProfileHeader />} />
        </Route>
      </Routes> */}
      {/* </Authenticated.Provider> */}
      <SideBar />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/profile" element={<ProfileHeader />} />
      </Routes>
      <Widgets />
    </div>
  );
}

export default App;
