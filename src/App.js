import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import LoginForm from "./components/login/LoginForm";
import { useState } from "react";

function App() {
  const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  const [authUser, setAuthUser] = useState(false);


  return (
    <div className="app">
      {authUser ? (
        <>
          <SideBar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<ProfileHeader />} />
          </Routes>
          <Widgets />
        </>
      ) : (
        <>
          <LoginForm
            logDetails={logDetails}
            setLogDetails={setLogDetails}
            setAuthUser={setAuthUser}
          />
        </>
      )}
    </div>
  );
}

export default App;
