import { getAllProducts } from '@/api/productsAPI'
import { IGetProductsData } from '@/types/postProductData.type'

export const getMoreProductsAPI = async (
  params: IGetProductsData,
  pageParam: number = 0,
) => {
  const data: IGetProductsData = {
    page: pageParam,
    size: params.size,
    sort: params.sort,
    keyword: params.keyword,
    cityCode: params.cityCode,
    contentType: params.contentType,
    startDate: params.startDate,
    endDate: params.endDate,
    startTime: params.startTime,
    endTime: params.endTime,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
  }
  const response = await getAllProducts(data)
  return response.data
}
