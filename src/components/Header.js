import React, { useContext } from "react";
import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../commonUtils/useOnlineStatus";
import UserContext from "../commonUtils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginVal, setLoginVal] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);

  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

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
        <li>
          <Link to="/cart">
            Cart{" "}
            <span
              style={{
                border: "1px solid black",
                padding: "2px 4px",
                marginLeft: "-4px",
                fontSize: "15px",
                borderRadius: "5px",
              }}
            >
              {cartItems.length}
            </span>
          </Link>
        </li>
        <li style={{ fontWeight: "bold" }}>{userName}</li>
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
