import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Users.module.scss";
import Preloader from "../utils/Preloader";
import UserModal from "./UserModal/UserModal";
import FormModal from "./FormModal/FormModal";
import { requestUsers, requestSelectedUser, createUser } from "../../redux/users-reducer";

const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.usersList);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const isFetching = useSelector((state) => state.users.isFetching);
  const error = useSelector((state)=> state.ui.error)

  const [userModalActive, setUserModalActive] = useState(false);
  const [formModalActive, setFormModalActive] = useState(false);

  useEffect(() => dispatch(requestUsers()), []);

  const openUserModal = (userId) => {
    dispatch(requestSelectedUser(userId));
    setUserModalActive(true);
  };

  const onCreate = (user) => {
    dispatch(createUser(user))
    setFormModalActive(false)
  };

  return (
    <>
      <main className={style.main}>
        {isFetching ? (
          <Preloader />
        ) : (
          <div className={style.usersList}>
            {Object.entries(usersList).map(([key, value]) => {
              return (
                <button key={key} onClick={() => openUserModal(key)}>
                  {value.Name}, <i>{value.Age} y.o.</i>
                </button>
              );
            })}
          </div>
        )}
        <UserModal
          user={selectedUser}
          active={userModalActive}
          setActive={setUserModalActive}
          isFetching={isFetching}
        />
      </main>
      <div className={style.btnWrapper}>
        <button onClick={() => setFormModalActive(true)}>New User</button>
      </div>
      <FormModal
        active={formModalActive}
        setActive={setFormModalActive}
        onSubmit={onCreate}
        error={error}
        isFetching={isFetching}
      />
    </>
  );
};

export default Users;
