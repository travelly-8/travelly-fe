import { API_AUTH } from '@/constants/API'
import { getAccessToken, refreshAccessToken } from '@/utils/tokenStorage'

import axios from 'axios'

const baseURL = 'http://3.36.62.116:8080'

const fileInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

const noAuthRequiredEndpoints: string[] = [API_AUTH.SIGNUP, API_AUTH.LOGIN]

fileInstance.interceptors.request.use(
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

fileInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

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
        return fileInstance(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default fileInstance
