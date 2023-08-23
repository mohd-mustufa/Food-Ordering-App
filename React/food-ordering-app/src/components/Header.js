import React from "react";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  let [loginVal, setLoginVal] = useState("Login");

  return (
    <div id="header">
      <Logo />
      <ul>
        <li id="appName">Mustufa's Food App</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
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
