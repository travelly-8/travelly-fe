import { InputValuesType } from '@components/input/Input.type'

export const INPUT_LABELS: InputValuesType = {
  name: '닉네임',
  email: '이메일',
  password: '비밀번호',
  passwordCheck: '비밀번호 확인',
  passwordConfirm: '비밀번호 확인',
}

export const INPUT_ERROR_TYPE: InputValuesType = {
  nameInvalidRegex: '잘못된 닉네임 형식입니다.',
  nameDuplicated: '이미 사용중인 닉네임 입니다.',
  emailInvalidRegex: '잘못된 이메일 형식입니다.',
  emailDuplicated: '이미 사용중인 이메일 입니다.',
  emailNotMatch: '이메일을 확인해주세요.',
  passwordNotMatch: '비밀번호를 확인해주세요.',
  passwordInvalidLength: '8자 이상 입력해주세요.',
  passwordInvalidRegex: '잘못된 비밀번호 형식입니다.',
  passwordCheckNotMatched: '비밀번호가 일치하지 않습니다.',
  passwordConfirmNotMatched: '비밀번호가 일치하지 않습니다.',
}

export const INPUT_PLACEHOLDER: InputValuesType = {
  name: '닉네임을 입력해 주세요.',
  email: '이메일을 입력해 주세요.',
  password: '비밀번호를 입력해 주세요.',
  passwordCheck: '비밀번호를 동일하게 입력해 주세요.',
  passwordConfirm: '비밀번호를  입력해주세요.',
}
