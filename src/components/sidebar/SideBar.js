import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
} from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { CgProfile, CgMoreO } from "react-icons/cg";
import "./SideBar.css";
import SideBarOptions from "../sidebarOptions/SideBarOptions";
import { NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <FaTwitter className="sidebar-twitter-icon" />
      <NavLink to="/home">
        <SideBarOptions Icon={FaHome} text="Home" active />
      </NavLink>
      <SideBarOptions Icon={FaHashtag} text="Explore" />
      <SideBarOptions Icon={FaBell} text="Notifications" />
      <SideBarOptions Icon={FaEnvelope} text="Messages" />
      <SideBarOptions Icon={FaBookmark} text="Bookmarks" />
      <SideBarOptions Icon={IoMdListBox} text="Lists" />
      <NavLink to="/profile">
        <SideBarOptions Icon={CgProfile} text="Profile" />
      </NavLink>
      <SideBarOptions Icon={CgMoreO} text="More" />
      <button className="sidebar-tweet-btn">Tweet</button>
      <Outlet />
    </div>
  );
};

export default SideBar;
