import { API_PRODUCTS } from '@/constants/API'
import type {
  IGetProductsData,
  IPostProduct,
} from '@/types/postProductData.type'

import fileInstance from './fileInstance'
import instance from './instance'

export const getAllProducts = (data: IGetProductsData) => {
  const params = createParams(data)
  return instance({
    method: 'GET',
    url: API_PRODUCTS.PRODUCTS,
    params,
  })
}
export const postProduct = (data: IPostProduct) => {
  return instance({
    url: API_PRODUCTS.PRODUCTS,
    method: 'POST',
    data: data,
  })
}

export const postProductImage = (data: FormData[]) => {
  return fileInstance({
    url: API_PRODUCTS.PRODUCTS_IMAGE,
    method: 'POST',
    data: data,
  })
}

export const getProductDetail = (productId: number | undefined) => {
  return instance({
    method: 'GET',
    url: API_PRODUCTS.PRODUCTS_DETAIL(productId),
  })
}

export const putProductDetail = (productId: number, data: IPostProduct) => {
  return instance({
    method: 'PUT',
    url: API_PRODUCTS.PRODUCTS_DETAIL(productId),
    data: data,
  })
}

const createParams = (data: IGetProductsData) => {
  const params: { [key: string]: string | number } = {}

  Object.keys(data).forEach((key) => {
    const value = data[key as keyof IGetProductsData]
    if (value !== undefined) {
      params[key] = value
    }
  })

  // params.page = data.page
  // params.size = data.size
  // if (data.sortField) params.sortField = data.sortField
  // if (data.sortType) params.sortType = data.sortType
  // if (data.keyword) params.keyword = data.keyword
  // if (data.cityCode) params.cityCode = data.cityCode
  // if (data.contentType) params.contentType = data.contentType
  // if (data.startDate) params.startDate = data.startDate
  // if (data.endDate) params.endDate = data.endDate
  // if (data.startTime) params.startTime = data.startTime
  // if (data.endTime) params.endTime = data.endTime
  // if (data.minPrice !== undefined) params.minPrice = data.minPrice
  // if (data.maxPrice !== undefined) params.maxPrice = data.maxPrice

  return params
}
