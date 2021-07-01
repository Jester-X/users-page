import React from "react";
import {useDispatch} from 'react-redux'
import {requestUsers} from '../../redux/users-reducer'
import style from "./FilterMenu.module.scss";
import FilterForm from "./FilterForm/FilterForm"
import { useTranslation } from "react-i18next";

const FilterMenu = ({menuActive, setMenuActive}) => {
  const dispatch = useDispatch()
    const onFilter = (obj) => {
      dispatch(requestUsers(obj))
      setMenuActive(false)
    }
    const {t} = useTranslation()
  return (
      <div className={menuActive ? `${style.filterMenu} ${style.active}`: style.filterMenu}>
        <h2>{t("filterMenu.title")}</h2>
        <FilterForm onSubmit={onFilter}/>
      </div>
  );
};

export default FilterMenu;
