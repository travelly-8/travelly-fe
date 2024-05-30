import axios from '@/api/axios.ts'

export async function getAllProducts(page = 1, size = 5) {
  return await axios
    .get(`/products/?page=${page}&size=${size}`)
    .then((response) => response.data)
}
