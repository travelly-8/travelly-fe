import { API_MEMBER } from '@/constants/API'
import { IPostMemberNewPassword } from '@/types/postMemberData.type'

import instance from './instance'

export const getMember = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY,
  })
}

export const getMemberProfile = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY_PROFILE,
  })
}

export const postMemberNewPassword = (data: IPostMemberNewPassword) => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_PASSWORD,
    data: data,
  })
}
