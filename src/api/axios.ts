import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'http://13.125.227.242:8080',
})

export default axios
