import { InputValuesType } from '@components/input/Input.type'

export const INPUT_LABELS: InputValuesType = {
  name: '닉네임',
  email: '이메일',
  password: '비밀번호',
  passwordCheck: '비밀번호 확인',
  passwordConfirm: '비밀번호 확인',
  prevPassword: '비밀번호 확인',
  newPassword: '비밀번호 재설정',
  newPasswordCheck: '재설정 비밀번호 확인',
  companyName: '업체명',
  productName: '상품명',
  price: '가격',
  contact: '연락처',
  homepageUrl: '홈페이지 주소',
}

export const INPUT_ERROR_TYPE: InputValuesType = {
  nameInvalidRegex: '2자 이상 16자 미만으로 입력해 주세요.',
  emailInvalidRegex: '잘못된 이메일 형식입니다.',
  emailNotMatch: '이메일을 확인해주세요.',
  passwordNotMatch: '비밀번호를 확인해주세요.',
  passwordInvalidRegex:
    '영문, 숫자, 특수문자를 포함한 8자리 이상 입력해 주세요.',
  passwordCheckNotMatched: '비밀번호가 일치하지 않습니다.',
}

export const INPUT_PLACEHOLDER: InputValuesType = {
  name: '닉네임을 입력해 주세요.',
  email: '이메일을 입력해 주세요.',
  password: '비밀번호를 입력해 주세요.',
  passwordCheck: '비밀번호를 동일하게 입력해 주세요.',
  passwordConfirm: '비밀번호를  입력해주세요.',
  prevPassword: '비밀번호를  입력해주세요.',
  newPassword: '재설정 비밀번호를 입력해주세요.',
  newPasswordCheck: '비밀번호를 다시 입력해주세요.',
  companyName: '업체명을 입력해주세요.',
  productName: '상품명을 입력해주세요.',
  price: '가격을 입력해주세요.',
  contact: '연락처 정보를 입력해 주세요.',
  homepageUrl: 'url을 입력해주세요.',
}
