import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../commonUtils/useOnlineStatus";

const Header = () => {
  const [loginVal, setLoginVal] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div id="header">
      <Logo />
      <ul>
        <li id="appName">Mustufa's Food App</li>
      </ul>
      <ul>
        <li id="onlineStatus">Online: {onlineStatus ? "✅️" : "🛑️"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/groceries">Groceries</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
