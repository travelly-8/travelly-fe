import { getReviews } from '@/api/reviewAPI'

import { useQuery } from '@tanstack/react-query'

const useGetReviews = (productId: string | undefined) => {
  const params = {
    page: 0,
    size: 5,
    sort: 'createdDate',
  }
  const { data } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => getReviews(Number(productId), params),
  })

  const reviewsData = data?.data.content

  return { reviewsData }
}

export default useGetReviews
