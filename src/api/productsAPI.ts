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

export const getTopProducts = () => {
  return instance({
    method: 'GET',
    url: API_PRODUCTS.TOP_PRODUCTS,
  })
}

export const postProduct = (data: IPostProduct) => {
  return instance({
    url: API_PRODUCTS.PRODUCTS,
    method: 'POST',
    data: data,
  })
}

export const postProductImage = (data: FormData) => {
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

export const getTopKeyWords = () => {
  return instance({
    method: 'GET',
    url: API_PRODUCTS.TOP_KEYWORDS,
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
  return params
}

export const deleteProduct = (productId: number) => {
  return instance({
    method: 'DELETE',
    url: API_PRODUCTS.PRODUCTS_DETAIL(productId),
  })
}
