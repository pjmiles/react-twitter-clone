import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import SignUp from "./components/signup/SignUp";
import LoginForm from "./components/login/LoginForm";
import { useState } from "react";

function App() {
  const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  const [authUser, setAuthUser] = useState(false);

  // const LoggedIn = () => {
  //   setAuthUser(true);
  //   // console.log(authUser);
  // };

  return (
    <div className="app">
      <LoginForm
        logDetails={logDetails}
        setLogDetails={setLogDetails}
        // LoggedIn={LoggedIn}
        setAuthUser={setAuthUser}
      />

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
