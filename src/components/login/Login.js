import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { axiosInstanceLog } from "../api/axios";
import "./Login.css";

const Login = ({ closeModal }) => {
  const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  const [logErr, setLogErr] = useState("");

  const handleChange = (e) => {
    setLogDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstanceLog.post("/login", logDetails);
      localStorage.setItem("logDetails", JSON.stringify(data));
    } catch (e) {
      setLogErr("Login failed please ");
    }
  };

  return (
    <div className="login">
      <div className="login-split login-left">
        <div className="login-centered">
          <h1>Twitter</h1>
          <FaTwitter className="login-logo" />
        </div>
      </div>

      <div className="login-split login-right">
        {logErr && (
          <div className="log-error-container">
            <p className="log-error">{logErr}</p>
          </div>
        )}
        <h2 className="login-header">Login</h2>
        <form className="login-centered" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username" />
            <input
              type="text"
              className="login-input"
              placeholder="username"
              id="username"
              name="username"
              value={logDetails.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" />
            <input
              type="password"
              className="login-input"
              placeholder="password"
              id="password"
              name="password"
              value={logDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-btn-container">
            <button className="login-input-btn">Login</button>
          </div>
          <span className="login-note">
            No account{" "}
            <span className="login-click" onClick={() => closeModal(false)}>
              click here
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
