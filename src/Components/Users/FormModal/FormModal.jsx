import React from "react";
import Modal from "react-modal";
import { Form, Field } from "react-final-form";
import style from "./FormModal.module.scss";
import {
  composeValidators,
  required,
  isValidEmail,
  isValidAge,
} from "../../../validators/validators";
import { useTranslation } from "react-i18next";

const FormModal = ({ onSubmit, active, setActive }) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={active}
      onRequestClose={() => setActive(false)}
      contentLabel="New User Form"
      className={style.Modal}
      overlayClassName={style.Overlay}
    >
      <Form
        onSubmit={onSubmit}
        subscription={{
          submitting: true,
        }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="Name" validate={required}>
              {({ input, meta }) => (
                <div
                  className={`${style.field} ${
                    (meta.error || meta.submitError) &&
                    meta.touched &&
                    style.error
                  }`}
                >
                  <label>{t("users.formModal.name")}:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder={t("users.formModal.placeholder.name")}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field
              name="Age"
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
                  <label>{t("users.formModal.age")}:</label>
                  <input {...input} type="text" placeholder="18" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field
              name="Email"
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
                  <label>{t("users.formModal.email")}:</label>
                  <input
                    {...input}
                    type="email"
                    placeholder="usermail@gmail.com"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="Address" component="input" type="text">
              {({ input }) => (
                <div className={style.field}>
                  <label>{t("users.formModal.address")}:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder={t("users.formModal.placeholder.address")}
                  />
                </div>
              )}
            </Field>
            <div className={style.buttons}>
              <button
                className={style.resetBtn}
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                {t("users.formModal.resetBtn")}
              </button>
              <button
                className={style.createBtn}
                type="submit"
                disabled={submitting | pristine}
              >
                {t("users.formModal.createBtn")}
              </button>
            </div>
          </form>
        )}
      </Form>
      <span className={style.close} onClick={() => setActive(false)}></span>
    </Modal>
  );
};

export default FormModal;
