export interface IEmailRecoverySearchProps {
  onSearchSuccess: (email: string, createDate: string) => void
}

export interface IErrorResponse {
  message: string
}
