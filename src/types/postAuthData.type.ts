export interface ISignup {
  email: string
  password: string
  nickname: string
}

export interface ISocialLogin {
  registrationId: string
  data: DataType
}

export type DataType = {
  code: string
}

export type ReissueType = {
  refreshToken: string
}
