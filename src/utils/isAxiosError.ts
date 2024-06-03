import { AxiosError } from 'axios'

// error가 AxiosError인지 확인하는 타입 가드 함수
export default function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined
}
