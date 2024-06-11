import { IGetReviewDetailResponse } from '@/types/getReviewDetailData.type'

import { useQuery } from '@tanstack/react-query'

/**
 * 주어진 queryKey로 캐시된 데이터를 조회하고 지정된 queryFn으로 데이터 패치
 *
 * @param {string} queryKey 쿼리키, 여기에선 productsAPI에 정의된 상수를 받습니다.
 * @param {Function} queryFn 데이터 패치 함수, Promise 반환.
 */

export default function useGetReviewDetail(
  queryKey: string,
  queryFn: () => Promise<IGetReviewDetailResponse>,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn()
      return res.data
    },
  })
}
