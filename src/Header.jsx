import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Flixster
      <img src="./public/icons8-popcorn-64.png" alt="Popcorn" className="popcorn-icon" />
      </h1>
    </header>
  );
};

export default Header;
