import { useEffect, useState } from 'react'

import { getReviews } from '@/api/reviewAPI'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'

import { useQuery } from '@tanstack/react-query'

const useGetReviews = (productId: string | undefined, page: number) => {
  const [reviews, setReviews] = useState<IReviewDetailData[]>([])
  const params = {
    page,
    size: 3,
    sort: 'createdDate',
  }

  const { data } = useQuery({
    queryKey: ['reviews', productId, page],
    queryFn: () => getReviews(Number(productId), params),
  })

  useEffect(() => {
    if (data) {
      setReviews((prevReviews) => [...prevReviews, ...data.data.content])
    }
  }, [data])

  const totalElements = data?.data.totalElements || 0

  return { reviews, totalElements }
}

export default useGetReviews
