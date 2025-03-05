import React, { useState } from "react";
import "../styles/Login.css";
const Login = () => {
  const [cutLoginPage, setCutLoginPage] = useState(false);
  const handleLoginPageCut = () => {
    setCutLoginPage(true);
  };
  return (
    <div className={`login-container ${cutLoginPage ? "hide-login-page" : ""}`}>
      <button className="cut-page-btn" onClick={handleLoginPageCut}>
        X
      </button>
      <div className="login-register">
        <p className="login-text">Login</p>
        <button className="register-btn">Register for free</button>
      </div>
      <div className="info-container">
        <label htmlFor="username-email">Email ID / Username</label>
        <input
          type="text"
          id="username-email"
          placeholder="Enter your active Email ID / Username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>

        <button className="login-btn">Login</button>
        <a href="#" className="use-otp">
          Use OTP to Login
        </a>

        <p className="or-para">
          ----------------------------- or -----------------------------{" "}
        </p>
        <a href="https://www.google.com" className="google-signIn">
          <img src="/images/socialMediaIcons/googleIcon.png" alt="" /> Sign in
          with Google
        </a>
      </div>
    </div>
  );
};

export default Login;
