import React from "react";
import { useTranslation } from "react-i18next";


const Preloader = () => {
  const {t} = useTranslation()
  return <span>{t("preloader")}</span>
};

export default Preloader;
