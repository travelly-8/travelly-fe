import { API_AUTH } from '@/constants/API'

import axios from 'axios'

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken')
}

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) throw new Error('Refresh token is missing')

  try {
    const response = await axios.post(API_AUTH.REISSUE, { refreshToken })
    const { accessToken, refreshToken: newRefreshToken } = response.data.token
    saveTokens(accessToken, newRefreshToken)
    return accessToken
  } catch (error) {
    throw new Error('Failed to refresh access token')
  }
}

export const deleteTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
