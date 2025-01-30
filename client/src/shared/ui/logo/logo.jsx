import React from "react";
import "./logo.module.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src="./client/src/assets/logo.png" />
      <div className="sock"></div>
      <div className="text">Custom Socks Shop</div>
    </div>
  );
};

export default Logo;
