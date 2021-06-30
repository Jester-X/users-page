export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const required = (value) => {
    if(value) return undefined
    return 'Field is required'
}

export const isValidEmail = value => {
    return /\S+@\S+\.\S+/.test(value) ? undefined : 'Invalid Email'
}


export const isValidAge = value => {
    return value>0 ? undefined : 'Invalid Age'
}