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
        <h2 className={style.userName}>{user.Name}</h2>
        <h2><span>Age:</span> <i>{user.Age} years old</i></h2>
        <h2><span>Email:</span> {user.Email}</h2>
        <h2><span>Address:</span> {user.Address}</h2>
        <div className={style.buttons}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Modal>
    );
};

export default UserModal;
