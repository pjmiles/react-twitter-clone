import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import ProfileHeader from './components/profile/ProfileHeader'


function App() {
  return (
    <div className="app">
      <SideBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<ProfileHeader />}/>
      </Routes>
      <Widgets />
    </div>
  );
}

export default App;
