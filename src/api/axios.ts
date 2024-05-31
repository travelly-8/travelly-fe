import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'http://3.36.62.116:8080',
})

export default axios
