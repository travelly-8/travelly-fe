import { useCallback, useEffect, useState } from 'react'

import useGetReviews from '@/hooks/api/reviewAPI/useGetReviews'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'

const useLoadMoreReviews = (productId: string | undefined) => {
  const [page, setPage] = useState(0)
  const [reviews, setReviews] = useState<IReviewDetailData[]>([])
  const { reviews: fetchedReviews, totalElements } = useGetReviews(
    productId,
    page,
  )

  const initializeReviews = useCallback(() => {
    setPage(0)
    setReviews([])
  }, [])

  useEffect(() => {
    if (fetchedReviews.length > 0) {
      setReviews((prevReviews) => [...prevReviews, ...fetchedReviews])
    }
  }, [fetchedReviews, page])

  const handleLoadMoreReviews = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return { reviews, totalElements, handleLoadMoreReviews, initializeReviews }
}

export default useLoadMoreReviews
