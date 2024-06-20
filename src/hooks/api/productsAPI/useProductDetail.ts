import { getProductDetail } from '@/api/productsAPI'

import { useQuery } from '@tanstack/react-query'

const useProductDetail = (productId: string | undefined) => {
  const {
    data,
    isSuccess: isProductDetailSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['products-detail', productId],
    queryFn: () => getProductDetail(Number(productId)),
  })

  const productDetail = data?.data

  return { productDetail, isProductDetailSuccess, isLoading }
}

export default useProductDetail
