import React from "react";
import { Link } from "react-router-dom";

import "./AuthenticationPage.css";

const AuthenticationPage = () => {
  return (
    <>
      <div className="auth-container">
        <h2>Welcome to Cinema Ticket </h2>
        <h4>How should we call you?</h4>
        <div className="btn">
          <Link className="link" to={"/admin"}>
            Admin
          </Link>
          <Link className="link" to={"/user"}>
            User
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
