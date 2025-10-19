import React from "react";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      {/* Left side with image */}
      <div className="signup-image-section">
        <button className="close-btn">✕</button>
        <div className="image-overlay"></div>
      </div>

      {/* Right side with form */}
      <div className="signup-form-section">
        <div className="form-wrapper">
          <img
            src="/img/signuplogo.svg"
            alt="Loova Logo"
            className="signup-logo"
          />
          <div style={{ textAlign: "center" }}>
            <h2 className="signup-title">Welcome back to loova</h2>
            <p className="signup-suptitle">
              Kindly fill in your details below to log in
            </p>
          </div>

          <form>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Daphne Smith"
                className="input-field"
              />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="**************"
                  className="input-field"
                />

                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="signup-btn">
              LOG IN
            </button>
          </form>

          <p className="signup-text">
            don`t have an account?
            <a href="/signup" className="signup-link">
              signup
            </a>
          </p>
          <p className="signup-text2">Do You Forget Password?</p>
          <div className="divider">Or</div>
          <div className="icons">
            <GoogleIcon className="icon"/>
            <AppleIcon className="icon"/>
            <TwitterIcon className="icon"/>
            <FacebookIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
