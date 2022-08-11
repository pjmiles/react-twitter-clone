import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosInstanceLog } from "../api/axios";
import "./Login.css";

const Login = () => {
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
          <h2>Twitter</h2>
          <FaTwitter className="login-logo" />
        </div>
      </div>

      <div className="login-split login-right">
        <div className="log-error-container">
          <p className="log-error">{logErr}</p>
        </div>
        <h1 className="login-header">Login</h1>
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
            Forgot password <Link to="">click here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
