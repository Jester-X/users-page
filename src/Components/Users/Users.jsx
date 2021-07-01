import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Users.module.scss";
import Preloader from "../utils/Preloader";
import UserModal from "./UserModal/UserModal";
import FormModal from "./FormModal/FormModal";
import {
  requestUsers,
  requestSelectedUser,
  createUser,
} from "../../redux/users-reducer";
import { useTranslation } from "react-i18next";

const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.usersList);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const isFetching = useSelector((state) => state.users.isFetching);
  const { t } = useTranslation();
  const [userModalActive, setUserModalActive] = useState(false);
  const [formModalActive, setFormModalActive] = useState(false);

  useEffect(() => dispatch(requestUsers()), []);

  const openUserModal = (userId) => {
    dispatch(requestSelectedUser(userId));
    setUserModalActive(true);
  };

  const onCreate = (user) => {
    if (
      Object.values(usersList).every((value) => {
        return value.Email !== user.Email;
      })
    ) {
      dispatch(createUser(user));
      setFormModalActive(false);
    } else {
      return { Email: t("validate.submitEmail") };
    }
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
                  {value.Email}
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
        <button onClick={() => dispatch(requestUsers())}>
          {t("users.refreshBtn")}
        </button>
        <button onClick={() => setFormModalActive(true)}>
          {t("users.newUserBtn")}
        </button>
      </div>
      <FormModal
        active={formModalActive}
        setActive={setFormModalActive}
        onSubmit={onCreate}
        isFetching={isFetching}
      />
    </>
  );
};

export default Users;
