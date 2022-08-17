const ProfileEdit = ({ closeEditModal }) => {
  return (
    <div className="edit-profile">
      <div>
        <span onClick={() => closeEditModal(false)}>X</span>
        <h1>Edit Profile</h1>
        <button>Save</button>
      </div>

      <div>
        <textarea>name</textarea>

        <textarea>Bio</textarea>

        <textarea>Location</textarea>

        <textarea>Website</textarea>
      </div>
    </div>
  );
};

export default ProfileEdit;
