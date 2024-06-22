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
    const newAccessToken = response.data.accessToken
    saveTokens(newAccessToken, refreshToken)
    return newAccessToken
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        alert('다시 로그인해주세요!')
        sessionStorage.setItem('relogin', 'true')
        window.location.pathname = '/signup/start'
      }
    } else {
      console.error('Unexpected error', error)
    }
  }
}

export const deleteTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
