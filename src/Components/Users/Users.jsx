import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Users.module.scss";
import UserModal from "./UserModal/UserModal";
import { requestUsers, requestSelectedUser } from "../../redux/users-reducer";

const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.usersList);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const isFetching = useSelector((state) => state.users.isFetching);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => dispatch(requestUsers()), []);

  const openModal = (userId) => {
    dispatch(requestSelectedUser(userId));
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
                <button key={key} onClick={() => openModal(key)}>
                  {value.Name}, <i>{value.Age} y.o.</i>
                </button>
              );
            })}
          </div>
        )}
        <UserModal
          user={selectedUser}
          active={modalActive}
          setActive={setModalActive}
        />
      </main>
    </>
  );
};

export default Users;
