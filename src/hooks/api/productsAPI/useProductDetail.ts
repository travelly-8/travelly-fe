import { useEffect } from 'react'

import { getProductDetail } from '@/api/productsAPI'
import { setProductDetail } from '@/store/product-slice/product-slice'
import { RootState } from '@/store/store'

import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'

const useProductDetail = (productId: string | undefined) => {
  const dispatch = useDispatch()

  const { data: productDetailQuery, isSuccess: isProductDetailSuccess } =
    useQuery({
      queryKey: ['products-detail', productId],
      queryFn: ({ queryKey }) => getProductDetail(Number(queryKey[1])),
    })

  useEffect(() => {
    if (productDetailQuery?.data) {
      dispatch(setProductDetail(productDetailQuery.data))
    }
  }, [productDetailQuery, dispatch])

  const productDetail = useSelector((state: RootState) => state.product.detail)

  return { productDetail, isProductDetailSuccess }
}

export default useProductDetail
