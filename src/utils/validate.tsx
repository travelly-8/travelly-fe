import { INPUT_ERROR_TYPE } from '@/constants/INPUT_VALUES'

export const validateNickname = (
  value: string,
  inputAccessedFor: 'login' | 'signup' | undefined,
): string | null => {
  if (inputAccessedFor === 'signup' && value === '이미 가입된 닉네임') {
    return INPUT_ERROR_TYPE.name_duplicated
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
    return INPUT_ERROR_TYPE.name_invalid_regex
  }
  return null
}

export const validateEmail = (
  value: string,
  inputAccessedFor: 'login' | 'signup' | undefined,
): string | null => {
  if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    return INPUT_ERROR_TYPE.email_invalid_regex
  }
  if (inputAccessedFor === 'signup' && value === '이미 가입된 이메일') {
    return INPUT_ERROR_TYPE.email_duplicated
  }
  if (inputAccessedFor === 'login' && value === '잘못된 이메일') {
    return INPUT_ERROR_TYPE.email_not_match
  }
  return null
}

export const validatePassword = (
  value: string,
  inputAccessedFor: 'login' | 'signup' | undefined,
): string | null => {
  if (value.length < 8 || value.length > 64) {
    return INPUT_ERROR_TYPE.password_invalid_length
  }

  if (
    inputAccessedFor === 'signup' &&
    !value.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
    )
  ) {
    return INPUT_ERROR_TYPE.password_invalid_regex
  }
  if (inputAccessedFor === 'login' && value === '잘못된 비밀번호') {
    return INPUT_ERROR_TYPE.password_not_match
  }
  return null
}

export const validatePasswordCheck = (
  value: string,
  inputRefValue: string | undefined,
): string | null => {
  if (value !== inputRefValue) {
    return INPUT_ERROR_TYPE.password_check_not_matched
  }
  return null
}
