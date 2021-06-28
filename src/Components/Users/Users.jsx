import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Users.module.scss";
import UserModal from "./UserModal/UserModal";
import { requestUsers } from "../../redux/users-reducer";

const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.usersList);
  const isFetching = useSelector((state) => state.users.isFetching);

  const [currUser, setCurrUser] = useState({})
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => dispatch(requestUsers()), []);

  const handleClick = (value) => {
    console.log(value);
    
    setModalActive(true);
  };

  return (
    <>
      <main className={style.main}>
        {isFetching ? (
          "fetching.."
        ) : (
          <div className={style.usersList}>
            {Object.entries(usersList).map(([key, value]) => {
              return (
                <>
                  <button key={key} onClick={() => handleClick(value)}>
                    {value.Name}, <i>{value.Age} y.o.</i>
                  </button>
                  <UserModal
            user={value}
            key={key}
            active={modalActive}
            setActive={setModalActive}
          />
                </>
              );
            })}
            
          </div>
        )}
      </main>
    </>
  );
};

export default Users;
