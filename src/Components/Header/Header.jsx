import React from "react";
import logo from "../../assets/header-logo.svg";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <h1>Users UI</h1>
    </header>
  );
};

export default Header;
