import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import style from "./UserModal.module.scss";
import { deleteUser } from "../../../redux/users-reducer";

Modal.setAppElement("#root");

const UserModal = ({ active, setActive, user, isFetching }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const onEdit = () => {
    setEditMode(true);
  };
  const onDelete = (userId) => {
    dispatch(deleteUser(userId));
    setActive(false);
  };

  return (
    <Modal
      isOpen={active}
      onRequestClose={() => setActive(false)}
      contentLabel="User Info"
      className={style.Modal}
      overlayClassName={style.Overlay}
    >
      {isFetching ? (
        "Loading.."
      ) : (
        <>
          <h2 className={style.userName}>{user.Name}</h2>
          <h2>
            <span>Age:</span> <i>{user.Age} years old</i>
          </h2>
          <h2>
            <span>Email:</span> {user.Email}
          </h2>
          {user.Address && (
            <h2>
              <span>Address:</span> {user.Address}
            </h2>
          )}

          <div className={style.buttons}>
            <button
              className={style.deleteBtn}
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
            <button className={style.editBtn} onClick={onEdit}>
              Edit
            </button>
          </div>
          <span className={style.close} onClick={() => setActive(false)}></span>
        </>
      )}
    </Modal>
  );
};

export default UserModal;
