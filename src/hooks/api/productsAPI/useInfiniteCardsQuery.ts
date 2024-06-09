import { getSearchProducts } from '@/api/productsAPI'
import { ISearchProductsData } from '@/types/postProductData.type'

import { useInfiniteQuery } from '@tanstack/react-query'

const useInfiniteCardsQuery = (params: ISearchProductsData) => {
  const {
    size,
    sort,
    keyword,
    cityCode,
    contentType,
    startDate,
    endDate,
    startTime,
    endTime,
    minPrice,
    maxPrice,
  } = params

  const searchQueryFn = async ({ pageParam = 0 }) => {
    const data: ISearchProductsData = {
      page: pageParam,
      size,
      sort,
      keyword,
      cityCode,
      contentType,
      startDate,
      endDate,
      startTime,
      endTime,
      minPrice,
      maxPrice,
    }
    const response = await getSearchProducts(data)
    return response.data
  }

  const queryFn = searchQueryFn

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isPending } =
    useInfiniteQuery({
      queryKey: ['products', params],
      initialPageParam: 0,
      queryFn,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.last
        const nextPage = lastPage.pageable.pageNumber + 1
        return isLastPage ? undefined : nextPage
      },
    })

  return {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isPending,
  }
}

export default useInfiniteCardsQuery
