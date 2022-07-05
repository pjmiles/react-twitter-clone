
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { CgProfile, CgMoreO } from 'react-icons/cg'
import './SideBar.css'
import SideBarOptions from '../sidebarOptions/SideBarOptions';

const SideBar = () => {
  return (
    <div className="sidebar">
        <FaTwitter className="sidebar-twitter-icon"/>
    <SideBarOptions Icon={FaHome} text="Home" active/>
    <SideBarOptions Icon={FaHashtag} text="Explore"/>
    <SideBarOptions Icon={FaBell} text="Notifications"/>
    <SideBarOptions Icon={FaEnvelope} text="Messages"/>
    <SideBarOptions Icon={FaBookmark} text="Bookmarks"/>
    <SideBarOptions Icon={IoMdListBox} text="Lists"/>
    <SideBarOptions Icon={CgProfile} text="Profile"/>
    <SideBarOptions Icon={CgMoreO} text="More"/>
    <button className='sidebar-tweet-btn'>Tweet</button>
    </div>
  );
};

export default SideBar;
