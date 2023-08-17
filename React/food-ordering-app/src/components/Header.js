import React from "react";
import Logo from "./Logo";

const Header = () => (
  <div id="header">
    <Logo />
    <ul>
      <li id="appName">Mustufa's Food App</li>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Help</li>
      <li>Cart</li>
    </ul>
  </div>
);

export default Header;
