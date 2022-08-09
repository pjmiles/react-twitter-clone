import "./SignUp.css";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { axiosInstanceReg } from "../api/axios";
import Login from "../login/Login";

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const postRequest = async () => {
    try {
      await axiosInstanceReg.post("/register", user);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setErrMsg(err.message);
      setSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password !== user.password_confirmation) {
      setErrMsg("Password does not match");
      setSuccess(false)
    } else {
      postRequest();
    }
  };


  return (
    <>
      {success ? (
        <Login />
      ) : (
        <div className="signup-conatiner">
          <div className="signup-split signup-left">
            <div className="signup-centered">
              <h1>Twitter</h1>
              <FaTwitter className="singup-logo" />
            </div>
          </div>

          <div className="signup-split signup-right">
            <h2 className="signup-form-header">Signup</h2>
            <form className="signup-centered" onSubmit={handleSubmit}>
              <div className="signup-err">
                <span className="signup-error">{errMsg}</span>
              </div>
              <div className="signup-input-container">
                <label htmlFor="first_name" className="signup-label">
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="first name"
                    id="first_name"
                    name="first_name"
                    value={user.first_name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="signup-input-container">
                <label htmlFor="last_name" className="signup-label">
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="last name"
                    id="last_name"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="signup-input-container">
                <label htmlFor="username" className="signup-label">
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="username"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="signup-input-container">
                <label htmlFor="email" className="signup-label">
                  <input
                    type="email"
                    className="signup-input"
                    placeholder="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="signup-input-container">
                <label htmlFor="password" className="signup-label">
                  <input
                    type="password"
                    className="signup-input"
                    placeholder="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="signup-input-container">
                <label htmlFor="confirmPassword" className="signup-label">
                  <input
                    type="Password"
                    className="signup-input"
                    placeholder="confirm password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={user.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="signup-button">
                <button className="signup-btn">submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
