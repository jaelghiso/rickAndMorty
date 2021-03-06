import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img
          src={"rick-and-morty-logo.png"}
          alt="Logo"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Rick and Morty </span>
          <span className="heading-primary--sub">Discover our characters</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
