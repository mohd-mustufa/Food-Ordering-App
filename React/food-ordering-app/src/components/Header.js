import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [loginVal, setLoginVal] = useState("Login");

  return (
    <div id="header">
      <Logo />
      <ul>
        <li id="appName">Mustufa's Food App</li>
      </ul>
      <ul>
        <li>
          <Link to="/" className="no-style-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="no-style-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="no-style-link">
            Contact Us
          </Link>
        </li>
        <li>Help</li>
        <li>Cart</li>
        <button
          className="login-btn style-btn"
          onClick={() => {
            loginVal === "Login" ? setLoginVal("Logout") : setLoginVal("Login");
          }}
        >
          {loginVal}
        </button>
      </ul>
    </div>
  );
};

export default Header;
