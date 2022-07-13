import "./ProfileHeader.css";
import SideBar from "../sidebar/SideBar";
import Widgets from "../widgets/Widgets";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <>
      <SideBar />
      <div className="profile">
        <div className="profile-head">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile pics"
            />
            <span className="profile-name">
              <h4 className="profile-name-head">Alex Rohr</h4>
              <h6 className="profile-name-follow">@alexrohr</h6>
            </span>
          </div>
          <div className="profile-info">
            <button className="profile-edit-btn">Edit profile</button>
          </div>
        </div>
        <div className="profile-description">
          <h4 className="profile-description-text">
            Software Engineer | Business developer | Product designer
          </h4>
        </div>
        <div className="profile-follows">
          <h5>
            <Link to="">46 Following</Link>
          </h5>
          <h5>
            <Link to="">120 Followers</Link>
          </h5>
        </div>
      </div>
      <Widgets />
    </>
  );
};

export default ProfileHeader;
