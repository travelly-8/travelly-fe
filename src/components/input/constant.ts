import { InputValuesType } from './Input.type'

export const INPUT_LABELS: InputValuesType = {
  default: '기본 라벨',
  name: '닉네임',
  email: '이메일',
  password: '비밀번호',
  password_check: '비밀번호 확인',
}

export const INPUT_ERROR_TYPE: InputValuesType = {
  default: 'inputType을 지정해주세요.',
  name_invalid_regex: '잘못된 닉네임 형식입니다.',
  name_duplicated: '동일한 닉네임이 이미 가입되어 있습니다.',
  email_invalid_regex: '잘못된 이메일 형식입니다.',
  email_duplicated: '동일한 이메일이 이미 가입되어 있습니다.',
  email_not_match: '이메일을 확인해주세요.',
  password_not_match: '비밀번호를 확인해주세요.',
  password_invalid_length: '8자 이상 작성해주세요.',
  password_invalid_regex: '잘못된 비밀번호 형식입니다.',
  password_check_not_matched: '비밀번호가 일치하지 않습니다.',
}

export const INPUT_PLACEHOLDER: InputValuesType = {
  default: 'inputType을 지정해 주세요',
  name: '닉네임을 입력해 주세요.',
  email: '이메일을 입력해 주세요.',
  password: '비밀번호를 입력해 주세요.',
  password_check: '비밀번호를 동일하게 입력해 주세요.',
}
