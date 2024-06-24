import { IGetTravellyReviewResponse } from '@/types/getMemberData.type'

import { useQuery } from '@tanstack/react-query'

function useGetReview(
  queryKey: string,
  queryFn: () => Promise<IGetTravellyReviewResponse>,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn()
      return res.data
    },
  })
}

export default useGetReview
