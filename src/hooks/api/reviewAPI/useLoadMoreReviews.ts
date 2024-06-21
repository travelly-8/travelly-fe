import { getReviews } from '@/api/reviewAPI'

import { useInfiniteQuery } from '@tanstack/react-query'

interface IUseLoadMoreReviewsParams {
  productId: string | undefined
  sort: string
}

const useLoadMoreReviews = ({ productId, sort }: IUseLoadMoreReviewsParams) => {
  const getQueryFn = async ({ pageParam = 0 }) => {
    const params = {
      page: pageParam,
      size: 3,
      sort,
    }
    const data = await getReviews(Number(productId), params)
    return data
  }

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['reviews', productId, sort],
    queryFn: getQueryFn,
    getNextPageParam: (lastPage) => {
      const isLastPage = lastPage.data.last
      const nextPage = lastPage.data.pageable?.pageNumber + 1

      return isLastPage ? undefined : nextPage
    },
    initialPageParam: 0,
  })

  const reviews = data?.pages.flatMap((page) => page.data.content) || []
  const totalElements = data?.pages[0]?.data.totalElements || 0

  return {
    reviews,
    totalElements,
    handleLoadMoreReviews: fetchNextPage,
  }
}

export default useLoadMoreReviews
