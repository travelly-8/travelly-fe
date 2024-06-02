import { API_PRODUCTS } from '@/constants/API'
import type {
  IPostProduct,
  ISearchProductsData,
} from '@/types/postProductData.type'

import instance from './instance'

export const getAllProducts = (
  page: number,
  size: number,
  sort?: string,
  sortType?: string,
) => {
  return instance({
    method: 'GET',
    url: API_PRODUCTS.PRODUCTS,
    params: {
      page: page,
      size: size,
      sort: sort,
      sortType: sortType,
    },
  })
}

export const postProduct = (data: IPostProduct) => {
  return instance({
    url: API_PRODUCTS.PRODUCTS,
    method: 'POST',
    data: data,
  })
}

export const getProductDetail = (productId: number) => {
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

export const getSearchProducts = (data: ISearchProductsData) => {
  const params = createParams(data)
  return instance({
    method: 'GET',
    url: API_PRODUCTS.PRODUCTS_SEARCH,
    params,
  })
}

const createParams = (data: ISearchProductsData) => {
  const params: { [key: string]: string | number } = {}

  Object.keys(data).forEach((key) => {
    const value = data[key as keyof ISearchProductsData]
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
