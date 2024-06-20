import { getReviews } from '@/api/reviewAPI'

import { useQuery } from '@tanstack/react-query'

const useGetReviews = (productId: string | undefined, page: number) => {
  const params = {
    page,
    size: 3,
    sort: 'createdDate',
  }

  const { data } = useQuery({
    queryKey: ['reviews', productId, page],
    queryFn: () => getReviews(Number(productId), params),
    enabled: !!productId,
    staleTime: 5 * 60 * 1000,
  })

  const reviews = data?.data.content || []
  const totalElements = data?.data.totalElements || 0

  return { reviews, totalElements }
}

export default useGetReviews
