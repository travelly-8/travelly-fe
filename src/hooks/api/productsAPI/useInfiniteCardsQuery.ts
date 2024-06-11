import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { IGetProductsData } from '@/types/postProductData.type'

import { getMoreProductsAPI } from '../../../api/getMoreProductsAPI'

const useInfiniteCardsQuery = (params: IGetProductsData) => {
  const getQueryFn = async ({ pageParam = 0 }) => {
    const data = await getMoreProductsAPI(params, pageParam)
    return data
  }

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isPending } =
    useInfiniteScroll({
      queryKey: ['products', params],
      queryFn: getQueryFn,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.last
        const nextPage = lastPage.pageable.pageNumber + 1
        return isLastPage ? undefined : nextPage
      },
      initialPageParam: 0,
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
