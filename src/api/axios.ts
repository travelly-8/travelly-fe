import { BASE_URL } from '@/constants/API'

import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: BASE_URL,
})

export default axios
