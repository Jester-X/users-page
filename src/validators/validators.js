import I18n from "../i18n/i18n"

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const required = (value) => {
    if(value) return undefined
    return I18n.t("validate.required")
}

export const isValidEmail = value => {
    return /\S+@\S+\.\S+/.test(value) ? undefined : I18n.t("validate.email")
}


export const isValidAge = value => {
    return value>=1 ? undefined : I18n.t("validate.age")
}

