import React from "react";
import style from "./UserModal.module.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserModal = ({ active, setActive, user }) => {
  return (
    <Modal
      isOpen={active}
      onRequestClose={() => setActive(false)}
      contentLabel="User Info"
      className={style.Modal}
      overlayClassName={style.Overlay}
    >
      <h2>{user.Name}</h2>
      <h2>Age: {user.Age}</h2>
      <h2>Email: {user.Email}</h2>
      <h2>Address: {user.Address}</h2>
      <div className={style.buttons}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </Modal>
  );
};

export default UserModal;
