import { AxiosError } from 'axios'

export default function isAxiosError<T = any>(
  error: any,
): error is AxiosError<T> {
  return error.isAxiosError
}
