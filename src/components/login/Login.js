import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-split login-left">
        <div className="login-centered">
          <h2>Twitter</h2>
          <FaTwitter className="login-logo" />
        </div>
      </div>

      <div className="login-split login-right">
          <h2 className="login-header">Login</h2>
        <form className="login-centered">
          <div className="input-container">
            <label htmlFor="username"></label>
            <input type="text" className="login-input" placeholder="username" required />
          </div>
          <div className="input-container">
            <label htmlFor="username"></label>
            <input type="password" className="login-input" placeholder="password" required />
          </div>
          <div className="login-btn-container">
            <button type="submit" className="login-input-btn">
              Login
            </button>
          </div>
          <span className="login-note">Forgot password <Link to="/signup">click here</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
