import React from "react";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Signup = () => {
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
          <img src="/img/signuplogo.svg" alt="Loova Logo" className="signup-logo" />
          <h2 className="signup-title">CREATE AN ACCOUNT</h2>

          <button className="google-btn">
            Create account with Google
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="google-icon"
            />
          </button>

          <div className="divider">Or</div>

          <form>
  <div className="input-group">
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      type="email"
      placeholder="ENTER YOUR EMAIL ADDRESS"
      className="input-field"
    />
  </div>

  <div className="input-group">
    <label htmlFor="fullname">Full Name</label>
    <input
      id="fullname"
      type="text"
      placeholder="ENTER YOUR FULL NAME"
      className="input-field"
    />
  </div>

 <div className="input-group password-group">
      <label htmlFor="password">Password</label>

      <div className="password-wrapper">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="CREATE YOUR PASSWORD"
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
    SIGN UP
  </button>
</form>


          <p className="login-text">
            ALREADY HAVE AN ACCOUNT?{" "}
            <a href="/login" className="login-link">
              LOGIN
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
