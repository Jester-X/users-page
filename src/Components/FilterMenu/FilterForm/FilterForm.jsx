import React from 'react'
import { Form, Field } from "react-final-form";
import { useTranslation } from 'react-i18next';
import style from "./FilterForm.module.scss"

const FilterForm = ({onSubmit}) => {
  const {t} = useTranslation()
  return (
    <Form
    onSubmit={onSubmit}
    subscription={{
      submitting: true,
    }}
  >
    {({ handleSubmit, form, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <Field name="Name">
          {({ input }) => (
            <div className={style.field}>
              <label>{t("filterMenu.filterForm.name")}:</label>
              <input {...input} type="text" placeholder={t("filterMenu.filterForm.placeholder.name")} />
            </div>
          )}
        </Field>

        <Field name="Age">
          {({ input }) => (
            <div className={style.field}>
              <label>{t("filterMenu.filterForm.age")}:</label>
              <input {...input} type="number" placeholder="18" />
              
            </div>
          )}
        </Field>
        <Field name="Email">
          {({ input }) => (
            <div className={style.field}>
              <label>{t("filterMenu.filterForm.email")}:</label>
              <input
                {...input}
                type="email"
                placeholder="usermail@gmail.com"
              />
            </div>
          )}
        </Field>

        <Field name="Address" component="input" type="text">
          {({ input }) => (
            <div className={style.field}>
              <label>{t("filterMenu.filterForm.address")}:</label>
              <input
                {...input}
                type="text"
                placeholder={t("filterMenu.filterForm.placeholder.address")}
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
            {t("filterMenu.filterForm.resetBtn")}
          </button>
          <button
            className={style.searchBtn}
            type="submit"
            disabled={submitting | pristine}
          >
            {t("filterMenu.filterForm.searchBtn")}
          </button>
        </div>
      </form>
    )}
  </Form>
  )  
}

export default FilterForm;