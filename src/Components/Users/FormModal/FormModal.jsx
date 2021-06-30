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

const FormModal = ({ onSubmit, active, setActive }) => {
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
        {({ handleSubmit, submitError, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="Name" validate={required}>
              {({ input, meta }) => (
                <div className={style.field}>
                  <label>Name:</label>
                  <input {...input} type="text" placeholder="Marina" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field
              name="Age"
              validate={composeValidators(required, isValidAge)}
            >
              {({ input, meta }) => (
                <div className={style.field}>
                  <label>Age:</label>
                  <input {...input} type="number" placeholder="18" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field
              name="Email"
              validate={composeValidators(required, isValidEmail)}
            >
              {({ input, meta }) => (
                <div className={style.field}>
                  <label>Email:</label>
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
                  <label>Address:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Kyiv, Awesome street, 29"
                  />
                </div>
              )}
            </Field>
            {submitError && <div className="error">{submitError}</div>}
            <div className={style.buttons}>
              <button
                className={style.resetBtn}
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
              <button
                className={style.createBtn}
                type="submit"
                disabled={submitting | pristine}
              >
                Create
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
