import React from "react";
import logo from "/logo.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <h1>Каждый взор радует всех,
Каждый шаг оставит след.
Полосатые, в горошек,
Для весёлых наших ножек.</h1>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default HomePage;
