import React from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  composeValidators,
  required,
  isValidEmail,
  isValidAge,
} from "../../../../validators/validators";
import style from "./EditForm.module.scss";

const EditForm = ({
  onSubmit,
  onCancel,
  user,
  editMode,
  onEdit,
  onDelete,
}) => {
  const {t} = useTranslation()
  return (
    <Form onSubmit={onSubmit} subscription={{ submitting: true }}>
      {({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field name="Name" validate={required} initialValue={user.Name}>
            {({ input, meta }) => (
              <div
                className={`${style.field} ${
                  (meta.error || meta.submitError) &&
                  meta.touched &&
                  style.error
                }`}
              >
                <label>{t("users.userModal.editForm.name")}:</label>
                <input
                  {...input}
                  disabled={!editMode}
                  type="text"
                  placeholder={t("users.userModal.editForm.placeholder.name")}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="Age"
            initialValue={user.Age}
            validate={composeValidators(required, isValidAge)}
          >
            {({ input, meta }) => (
              <div
                className={`${style.field} ${
                  (meta.error || meta.submitError) &&
                  meta.touched &&
                  style.error
                }`}
              >
                <label>{t("users.userModal.editForm.age")}:</label>
                <input
                  {...input}
                  disabled={!editMode}
                  type="text"
                  placeholder="18"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="Email"
            initialValue={user.Email}
            validate={composeValidators(required, isValidEmail)}
          >
            {({ input, meta }) => (
              <div
                className={`${style.field} ${
                  (meta.error || meta.submitError) &&
                  meta.touched &&
                  style.error
                }`}
              >
                <label>{t("users.userModal.editForm.email")}:</label>
                <input
                  {...input}
                  disabled={!editMode}
                  type="email"
                  placeholder="usermail@gmail.com"
                />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span>{meta.error || meta.submitError}</span>
                )}
              </div>
            )}
          </Field>
          <Field
            name="Address"
            component="input"
            type="text"
            initialValue={user.Address}
          >
            {({ input }) => (
              <div className={style.field}>
                <label>{t("users.userModal.editForm.address")}:</label>
                <input
                  {...input}
                  disabled={!editMode}
                  type="text"
                  placeholder={t("users.userModal.editForm.placeholder.address")}
                />
              </div>
            )}
          </Field>
          <div className={style.buttons}>
            {!editMode ? (
              <>
                <div className={style.buttons}>
                  <button
                    className={style.deleteBtn}
                    onClick={() => onDelete(user.id)}
                  >
                    {t("users.userModal.editForm.deleteBtn")}
                  </button>
                  <button className={style.editBtn} onClick={onEdit}>
                  {t("users.userModal.editForm.editBtn")}
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  className={style.applyBtn}
                  type="submit"
                  disabled={submitting}
                >
                 {t("users.userModal.editForm.applyBtn")}
                </button>
                <button
                  className={style.cancelBtn}
                  type="button"
                  disabled={submitting}
                  onClick={onCancel}
                >
                  {t("users.userModal.editForm.cancelBtn")}
                </button>
              </>
            )}
          </div>
        </form>
      )}
    </Form>
  );
};

export default EditForm;
