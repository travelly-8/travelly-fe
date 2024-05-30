import { API_PRODUCTS } from '@/constants/API'
import type { IPostProduct } from '@/types/postProductData.type'

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
