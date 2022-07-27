import "./SignUp.css";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name:"",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const getUserDetails = () => {
    setUser((state)=>({ 
      ...state, [e.target.id]: e.target.value
    }))
  }


  return (
    <div className="signup-conatiner">
      <div className="signup-split signup-left">
        <div className="signup-centered">
          <h2>Twitter</h2>
          <FaTwitter className="singup-logo" />
        </div>
      </div>

      <div className="signup-split signup-right">
        <h3 className="signup-form-header">Signup</h3>
        <form className="signup-centered">
          <div className="signup-input-container">
            <label htmlFor="name" className="signup-label">
              <input
                type="text"
                className="signup-input"
                placeholder="name"
                id="name"
                onChange={getUserDetails}
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
                onChange={getUserDetails}
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
                onChange={getUserDetails}
              />
            </label>
          </div>
          <div className="signup-input-container">
            <label htmlFor="dateOfBirth" className="signup-label">
              <input
                type="date"
                className="signup-input"
                placeholder="DOB"
                id="dateOfBirth"
                onChange={getUserDetails}
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
                onChange={getUserDetails}
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
                id="confirmPassword"
                onChange={getUserDetails}
                required
              />
            </label>
          </div>
          
          <div className="signup-button">
            <input type="submit" className="signup-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
