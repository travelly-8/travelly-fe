import { useState } from 'react'

import useGetReviews from '@/hooks/api/reviewAPI/useGetReviews'

const useLoadMoreReviews = (productId: string | undefined) => {
  const [page, setPage] = useState(0)
  const { reviews, totalElements } = useGetReviews(productId, page)

  const handleLoadMoreReviews = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return { reviews, totalElements, handleLoadMoreReviews }
}

export default useLoadMoreReviews
