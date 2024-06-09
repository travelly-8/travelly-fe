import { API_AUTH } from '@/constants/API'
import type { DataType, ISignup, ReissueType } from '@/types/postAuthData.type'

import instance from './instance'

export const putRole = (role: string) => {
  return instance({
    method: 'PUT',
    url: API_AUTH.ROLE(role),
  })
}

export const postSignup = (data: ISignup) => {
  return instance({
    method: 'POST',
    url: API_AUTH.SIGNUP,
    data: data,
  })
}

export const postLogin = (data: Omit<ISignup, 'nickname'>) => {
  return instance({
    method: 'POST',
    url: API_AUTH.LOGIN,
    data: data,
  })
}

export const postSocialLogin = (registrationId: string, data: DataType) => {
  return instance({
    method: 'POST',
    url: API_AUTH.SOCIALLOGIN(registrationId),
    data: data,
  })
}

export const postReissue = (data: ReissueType) => {
  return instance({
    method: 'POST',
    url: API_AUTH.REISSUE,
    data: data,
  })
}

export const getFindId = (nickname: string) => {
  return instance({
    method: 'GET',
    url: API_AUTH.FINDID,
    params: {
      nickname: nickname,
    },
  })
}

export const getLogout = () => {
  return instance({
    method: 'GET',
    url: API_AUTH.LOGOUT,
  })
}

export const deleteLeave = (password: string) => {
  return instance({
    method: 'DELETE',
    url: API_AUTH.LEAVE,
    data: {
      password: password,
    },
  })
}
