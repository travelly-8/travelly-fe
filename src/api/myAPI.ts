import { API_MEMBER } from '@/constants/API'
import {
  IPutMemberNewNickname,
  IPutMemberNewPassword,
} from '@/types/putMemberData.type'

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

export const postTravellerProfile = (data: RecentProduct[]) => {
  return instance({
    method: 'POST',
    url: API_MEMBER.MY_TRAVELLER,
    data: data,
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

export const getTravellyReview = () => {
  return instance({
    method: 'GET',
    url: API_MEMBER.MY_TRAVELLY_REVIEW,
  })
}
