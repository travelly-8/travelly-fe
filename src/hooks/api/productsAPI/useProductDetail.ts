import { useEffect } from 'react'

import { getProductDetail } from '@/api/productsAPI'
import { setProductDetail } from '@/store/product-slice/product-slice'
import { RootState } from '@/store/store'

import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'

const useProductDetail = (productId: string | undefined) => {
  const dispatch = useDispatch()

  const {
    data,
    isSuccess: isProductDetailSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['products-detail', productId],
    queryFn: () => getProductDetail(Number(productId)),
  })

  useEffect(() => {
    if (data?.data) {
      dispatch(setProductDetail(data.data))
    }
  }, [data, dispatch])

  const productDetail = useSelector((state: RootState) => state.product.detail)

  return { productDetail, isProductDetailSuccess, isLoading }
}

export default useProductDetail
