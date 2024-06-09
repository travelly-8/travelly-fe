import { useMemo } from 'react'

import { ISearchProductsData } from '@/types/postProductData.type'

import { useLocation } from 'react-router-dom'

const useProductCardsParams = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const input = queryParams.get('input')
  const type = queryParams.get('type')
  const minPrice = queryParams.get('minPrice')
  const maxPrice = queryParams.get('maxPrice')
  const startTime = queryParams.get('startTime')
  const endTime = queryParams.get('endTime')
  const date = queryParams.get('date')
  const city = queryParams.get('city')
  const sort = queryParams.get('sort')

  const cardsQueryData: ISearchProductsData = useMemo(
    () => ({
      page: 0,
      size: 6,
      sort: sort ? sort : undefined,
      keyword: input || undefined,
      cityCode: city === '0' ? undefined : (city as string),
      contentType:
        type === '0' || type === undefined ? undefined : (type as string),
      startDate: date || undefined,
      endDate: date || undefined,
      startTime: startTime || undefined,
      endTime: endTime || undefined,
      minPrice: Number(minPrice) || undefined,
      maxPrice: Number(maxPrice) || undefined,
    }),
    [input, type, minPrice, maxPrice, date, city, sort],
  )

  return cardsQueryData
}

export default useProductCardsParams
