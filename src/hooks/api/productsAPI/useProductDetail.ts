import { getProductDetail } from '@/api/productsAPI'

import { useQuery } from '@tanstack/react-query'

const useProductDetail = (productId: string | undefined) => {
  const {
    data,
    isSuccess: isProductDetailSuccess,
    isPending,
  } = useQuery({
    queryKey: ['products-detail', productId],
    queryFn: () => getProductDetail(Number(productId)),
  })

  const productDetail = data?.data

  return { productDetail, isProductDetailSuccess, isPending }
}

export default useProductDetail
