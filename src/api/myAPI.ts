import { API_MEMBER } from '@/constants/API'
import {
  IPutMemberNewNickname,
  IPutMemberNewPassword,
} from '@/types/putMemberData.type'

import qs from 'qs'

import fileInstance from './fileInstance'
import instance from './instance'

export const getMemberProfile = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY_PROFILE,
  })
}

export const getTravellyProfile = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY_TRAVELLY,
  })
}

interface RecentProduct {
  productId: number
}

export const getTravellerProfile = (data: RecentProduct[]) => {
  const params = { recentProducts: data }

  // qs.stringify를 사용하여 쿼리 문자열 생성
  const serializedParams = qs.stringify(params, { arrayFormat: 'indices' })
  console.log(params, serializedParams)
  return instance({
    method: 'GET',
    url: `${API_MEMBER.MY_TRAVELLER}?${serializedParams}`,
    // params: { recentProducts: data },
  })
}

export const putMemberNewPassword = (data: IPutMemberNewPassword) => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_PASSWORD,
    data,
  })
}

export const putMemberNickname = (data: IPutMemberNewNickname) => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_NICKNAME(data.nickname),
  })
}

export const putMemberProfileImage = (data: FormData) => {
  return fileInstance({
    method: 'PUT',
    url: API_MEMBER.MY_PROFILE_IMG,
    data,
  })
}

export const putMemberProfileImageReset = () => {
  return instance({
    method: 'PUT',
    url: API_MEMBER.MY_PROFILE_IMG_RESET,
  })
}
