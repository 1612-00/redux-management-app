import React from "react";
import "./css/authPage.css";

const AuthPage = () => {
  return (
    <div className="auth_page">
      <div className="content_container">
        <div className="content_wrapper">
          <h1 className="title">My app</h1>
          <button className="auth_btn">Login</button>
          <button className="auth_btn">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
