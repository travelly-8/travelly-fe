import { API_AUTH, BASE_URL } from '@/constants/API'
import { getAccessToken, refreshAccessToken } from '@/utils/tokenStorage'

import axios from 'axios'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const noAuthRequiredEndpoints: string[] = [API_AUTH.SIGNUP, API_AUTH.LOGIN]

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token && !noAuthRequiredEndpoints.includes(config.url as string)) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    const SERVER_ERROR_STATUS = [500, 501, 502, 503, 504]

    if (error.response && SERVER_ERROR_STATUS.includes(error.response.status)) {
      window.location.replace('/server-error')
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const newAccessToken = await refreshAccessToken()
        axios.defaults.headers.common['Authorization'] =
          `Bearer ${newAccessToken}`
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        return instance(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default instance
