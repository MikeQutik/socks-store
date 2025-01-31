import React from "react";
import logo from '/logo.png'
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <h1>Наши звездные носки освежат ваши мозги!</h1>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default HomePage;
