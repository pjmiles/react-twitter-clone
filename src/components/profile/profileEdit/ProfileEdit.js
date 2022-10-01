import '../profileEdit/ProfileEdit.css'

const ProfileEdit = ({ closeEditModal }) => {
  return (
    <form className="edit-profile-form">
      <div className="edit-profile-top">
        <div className="edit-profile">
          <span onClick={() => closeEditModal(false)}>X</span>
          <h1>Edit Profile</h1>
          <button>Save</button>
        </div>
      </div>

        <div>
          <input type="text" placeholder="Name" />

          <input type="text" placeholder="Bio" />

          <input type="text" placeholder="Location" />

          <input type="text" placeholder="Website" />
        </div>
    </form>
  );
};

export default ProfileEdit;
