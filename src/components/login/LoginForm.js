import { useState, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosInstanceLog } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";
import "./LoginForm.css";

const LoginForm = ({ closeLoginModal, logged }) => {
  // if(logged)window.location.href = "/home"
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
      const { data } = await axiosInstanceLog.post("login", logDetails);
      localStorage.setItem("logDetails", JSON.stringify(data));
      setAuthUser(data.user);
      navigate("/profile");
    } catch (e) {
      setLogErr("Invalid login details");
      console.log(e);
    }
  };

  return (
    <>
      {/* {authUser && ( */}
        {/* <> */}
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
              <form
                className="login-centered"
                onSubmit={handleSubmit}
                key={logDetails.id}
              >
                <h2 className="login-header">Login</h2>
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
                  <Link
                    to="/register"
                    className="login-click"
                    onClick={() => closeLoginModal(false)}
                  >
                    click here
                  </Link>
                </span>
              </form>
            </div>
          </div>
        {/* </> */}
      {/* )} */}
    </>
  );
};

export default LoginForm;
