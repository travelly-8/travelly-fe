import { API_MEMBER } from '@/constants/API'
import {
  IPutMemberNewNickname,
  IPutMemberNewPassword,
} from '@/types/putMemberData.type'

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

export const putMemberNewPassword = (data: IPutMemberNewPassword) => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_PASSWORD,
    data: data,
  })
}

export const putMemberNickname = (data: IPutMemberNewNickname) => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_NICKNAME(data.nickname),
  })
}
