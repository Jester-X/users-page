import React from "react";
import style from "./BurgerBtn.module.scss";

const BurgerBtn = ({ setMenuActive, menuActive }) => {
  return (
    <div
      className={style.burgerWrapper}
      onClick={() => setMenuActive(!menuActive)}
    >
      <div className={style.burgerBtn}>
        <span />
      </div>
    </div>
  );
};

export default BurgerBtn;
