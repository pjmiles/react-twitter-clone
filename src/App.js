import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import LoginForm from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUp";
import { useState, createContext } from "react";

function App() {
  // const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  // const [authUser, setAuthUser] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  // const Authenticated = createContext(authUser);

  return (
    <div className="app">
      {/* <Authenticated.Provider value={{ authUser }}> */}
          <>
            <Routes>
              <Route path="/" element={<LoginForm logged={localStorage.getItem("logDetails")}/>} />
              <Route path="/home" element={<Feed />} />
              <Route path="/profile" element={<ProfileHeader />} />
            </Routes>
            <Widgets />
          </> 
      {/* </Authenticated.Provider> */}
    </div>
  );
}

export default App;
