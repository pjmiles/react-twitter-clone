import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from "./components/profile/ProfileHeader";
import LoginForm from "./components/login/LoginForm";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";
// import ProtectedRoutes from "./components/ProtectedRoute";
// import Home from "./pages/Home";
import { AuthContext } from "./hooks/AuthContext";

function App() {
  // const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  const [authUser, setAuthUser] = useState(false);

  return (
    <div className="app">
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<SignUp />} />
            <Route
              path="/profile"
              element={
                <>
                  <SideBar />
                  <ProfileHeader />
                  <Widgets />
                </>
              }
            />
            <Route
              path="/feeds"
              element={
                <>
                  <SideBar />
                  <Feed />
                  <Widgets />
                </>
              }
            />
          </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
