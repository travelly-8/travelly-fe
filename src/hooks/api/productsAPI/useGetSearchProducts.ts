import { IGetProductResponse } from '@/types/getProductData.type'
import { ISearchProductsData } from '@/types/postProductData.type'

import { useQuery } from '@tanstack/react-query'

type QueryFunction = (data: ISearchProductsData) => Promise<IGetProductResponse>

function useGetSearchProducts(
  queryKey: ISearchProductsData,
  queryFn: QueryFunction,
  data: ISearchProductsData,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn(data)
      return res.data
    },
  })
}

export default useGetSearchProducts
