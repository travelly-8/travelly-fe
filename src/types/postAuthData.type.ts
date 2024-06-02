export interface ISignup {
  email: string
  password: string
  nickname: string
}

export type DataType = {
  code: string
}

export type ReissueType = {
  refreshToken: string
}
