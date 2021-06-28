import React from 'react';
import style from './App.module.scss';
import Users from './Components/Users/Users'
import Header from './Components/Header/Header';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

function App() {
  return (
    <Provider store={store}>
    <div className={style.app}>
      <Header/>
      <Users />
    </div>
    </Provider>
  );
}

export default App;