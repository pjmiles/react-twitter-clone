import "./ProfileHeader.css";
import { Link, Outlet } from "react-router-dom";
import { axiosInstanceLog } from "../api/axios";
import { useEffect, useState } from "react";
import ProfileEdit from "./profileEdit/ProfileEdit";

const ProfileHeader = ({ closeEditModal }) => {
  // const [name, setName] = useState("")
  // const [userName, setUserName] = useState("")
  const [openEditModal, setOpenEditModal] = useState(false)

  const handleOpenEditModal = () => {
      setOpenEditModal(true)
  }


  useEffect(() => {
    const userInfo = async () => {
      const logDetails = JSON.parse(localStorage.getItem("logDetails"));
      console.log(logDetails)
      try {
        const userProfile = await axiosInstanceLog.get("/profile", {
          headers: {
            Authorization: `Bearer ${logDetails.token}`,
          },
        });
        console.log(userProfile);
      } catch (e) {
        console.log(e);
      }
    };
    userInfo();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile-head">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="profile pics"
            />
            <span className="profile-name">
              <h1 className="profile-name-head">{}</h1>
              <h2 className="profile-name-follow">@{}</h2>
            </span>
          </div>
          <div className="profile-info">
            <button className="profile-edit-btn" onClick={handleOpenEditModal}>Edit profile</button>
          </div>
        </div>
        <div className="profile-description">
          <p className="profile-description-text">
            Software Engineer | Business developer | Product designer
          </p>
        </div>
        <div className="profile-follows">
          <p className="follower-count">
            <Link to="">46 Following</Link>
          </p>
          <p className="follower-count">
            <Link to=""><span>120 Followers</span></Link>
          </p>
        </div>
        <div className="profile-feeds">
          <ul className="feeds-contain">
            <li className="feed-item">Tweets</li>
            <li className="feed-item">Tweets &amp; replies</li>
            <li className="feed-item">Media</li>
            <li className="feed-item">Likes</li>
          </ul>
        </div>
      </div>
      {openEditModal && <ProfileEdit closeEditModal={() => setOpenEditModal(false)} />}
      <Outlet />
    </>
  );
};

export default ProfileHeader;
