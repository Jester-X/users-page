import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import EditForm from "./EditForm/EditForm";
import style from "./UserModal.module.scss";
import {
  deleteUser,
  requestSelectedUser,
  updateUser,
} from "../../../redux/users-reducer";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

const UserModal = ({ active, setActive, user, isFetching }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [editMode, setEditMode] = useState(false);

  const onEdit = () => {
    setEditMode(true);
  };
  const onEditSubmit = (userObj) => {
    dispatch(updateUser(userObj, user.id));
    setEditMode(false);
  };

  const onEditCancel = () => {
    dispatch(requestSelectedUser(user.id));
    setEditMode(false);
  };

  const onDelete = (userId) => {
    dispatch(deleteUser(userId));
    setActive(false);
  };

  return (
    <Modal
      isOpen={active}
      onRequestClose={() => {
        setEditMode(false);
        setActive(false);
      }}
      contentLabel="User Info"
      className={style.Modal}
      overlayClassName={style.Overlay}
    >
      <h2>{t("users.userModal.title")}</h2>
      {isFetching ? (
        t("preloader")
      ) : (
        <EditForm
          user={user}
          onEdit={onEdit}
          onSubmit={onEditSubmit}
          onCancel={onEditCancel}
          onDelete={onDelete}
          editMode={editMode}
        />
      )}
      <span
        className={style.close}
        onClick={() => {
          setEditMode(false);
          setActive(false);
        }}
      ></span>
    </Modal>
  );
};

export default UserModal;
