import React, { useState, Suspense } from "react";
import style from "./App.module.scss";
import Users from "./Components/Users/Users";
import FilterMenu from "./Components/FilterMenu/FilterMenu";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import i18n from "./i18n/i18n";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const onLangSwitch = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Provider store={store}>
      <div className={style.app}>
        <Header onLangSwitch={onLangSwitch} setMenuActive={setMenuActive} menuActive={menuActive} />
        <Users />
        <FilterMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </Provider>
  );
}

export default App;
