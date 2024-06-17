import { getAllProducts } from '@/api/productsAPI'

import { IProductCardData } from '@components/product-card/ProductCard.type'
import { useQuery } from '@tanstack/react-query'

interface IRecommendProductsParams {
  productId: string | undefined
  address: string
  cityCode: string
  isProductDetailSuccess: boolean
}

const useRecommendProducts = ({
  productId,
  address,
  cityCode,
  isProductDetailSuccess,
}: IRecommendProductsParams) => {
  const distanceRecommendQueryData = {
    page: 0,
    size: 5,
    keyword: address.split(' ')[1],
    cityCode: cityCode,
  }

  const { data: distanceRecommendProductQuery } = useQuery({
    queryKey: ['recommend-products', 'distance'],
    queryFn: () => getAllProducts(distanceRecommendQueryData),
    enabled: isProductDetailSuccess,
  })

  const ratingRecommendQueryData = {
    page: 0,
    size: 5,
    sort: 'HighestRating',
  }

  const { data: ratingRecommendQuery } = useQuery({
    queryKey: ['recommend-products', 'highestRating'],
    queryFn: () => getAllProducts(ratingRecommendQueryData),
  })

  const distanceRecommendProductData =
    distanceRecommendProductQuery?.data.content.filter(
      (product: IProductCardData) => product.id.toString() !== productId,
    )

  const ratingRecommendProductData = ratingRecommendQuery?.data.content.filter(
    (product: IProductCardData) => product.id.toString() !== productId,
  )

  return distanceRecommendProductData?.length > 0
    ? distanceRecommendProductData
    : ratingRecommendProductData
}

export default useRecommendProducts
