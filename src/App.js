import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";

function App() {
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
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
