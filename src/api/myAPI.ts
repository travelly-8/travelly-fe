import { API_MEMBER } from '@/constants/API'

import instance from './instance'

export const getMember = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY,
  })
}
