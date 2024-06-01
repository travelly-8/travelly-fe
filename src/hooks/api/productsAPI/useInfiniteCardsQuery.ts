import { getAllProducts } from '@/api/productsAPI'

import { useInfiniteQuery } from '@tanstack/react-query'

const useInfiniteCardsQuery = (size: number) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      initialPageParam: 0,
      queryFn: async ({ pageParam = 0 }) => {
        const response = await getAllProducts(pageParam, size)
        return response.data
      },
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
  }
}

export default useInfiniteCardsQuery
