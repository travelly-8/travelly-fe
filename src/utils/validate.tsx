import { INPUT_ERROR_TYPE } from '@/constants/INPUT_VALUES'

const validateHelper = (validateFn: (value: string) => string | true) => {
  return (value: string) => {
    if (!value) {
      return true
    }
    return validateFn(value)
  }
}

const loginEmailValidateFn = (value: string) => {
  if (value === '가입된 이메일') {
    return INPUT_ERROR_TYPE.emailNotMatch
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return INPUT_ERROR_TYPE.emailInvalidRegex
  }
  return true
}

const loginPasswordValidateFn = (value: string) => {
  if (value === '잘못된 비밀번호') {
    return INPUT_ERROR_TYPE.passwordNotMatch
  }
  if (value.length < 8 && value.length > 64) {
    return INPUT_ERROR_TYPE.passwordInvalidLength
  }
  return true
}

const signupNameValidateFn = (value: string) => {
  if (value === '이미 가입된 닉네임') {
    return INPUT_ERROR_TYPE.nameDuplicated
  }
  const totalLength = [...value].reduce((acc, char) => {
    const charCode = char.charCodeAt(0)
    if (charCode >= 44032 && charCode <= 55199) {
      return acc + 2
    }
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      return acc + 1
    }
    if (charCode >= 48 && charCode <= 57) {
      return acc + 1
    }
    return acc
  }, 0)
  if (totalLength < 3 || totalLength > 16) {
    return INPUT_ERROR_TYPE.nameInvalidRegex
  }
  return true
}

const signupEmailValidateFn = (value: string) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return INPUT_ERROR_TYPE.emailInvalidRegex
  }
  if (value === '이미 가입된 이메일') {
    return INPUT_ERROR_TYPE.emailDuplicated
  }
  return true
}

const signupPasswordValidateFn = (value: string) => {
  if (value.length < 8 || value.length > 64) {
    return INPUT_ERROR_TYPE.passwordInvalidLength
  }
  if (
    !value.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
    )
  ) {
    return INPUT_ERROR_TYPE.passwordInvalidRegex
  }
  return true
}

const signupPasswordCheckValidateFn = (
  value: string,
  formValues: { password: string },
) => {
  if (value !== formValues.password) {
    return INPUT_ERROR_TYPE.passwordCheckNotMatched
  }
  return true
}

export const loginEmailValidate = validateHelper(loginEmailValidateFn)
export const loginPasswordValidate = validateHelper(loginPasswordValidateFn)
export const signupNameValidate = validateHelper(signupNameValidateFn)
export const signupEmailValidate = validateHelper(signupEmailValidateFn)
export const signupPasswordValidate = validateHelper(signupPasswordValidateFn)

export const signupPasswordCheckValidate = (
  value: string,
  formValues: { password: string },
) => {
  if (!value) {
    return true
  }
  return signupPasswordCheckValidateFn(value, formValues)
}
