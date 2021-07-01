import React from "react";
import logo from "../../assets/header-logo.svg";
import style from "./Header.module.scss";
import BurgerBtn from "../FilterMenu/BurgerBtn/BurgerBtn";
import { useTranslation } from "react-i18next";


const Header = ({ setMenuActive, menuActive, onLangSwitch }) => {
  const { t } = useTranslation();
  
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <h1>{t("header.title")}</h1>
      <select name="language" onChange={onLangSwitch}>
        <option value="en">{t("header.lang.en")}</option>
        <option value="ua">{t("header.lang.ua")}</option>
        <option value="ru">{t("header.lang.ru")}</option>
      </select>
      <BurgerBtn menuActive={menuActive} setMenuActive={setMenuActive} />
    </header>
  );
};

export default Header;
