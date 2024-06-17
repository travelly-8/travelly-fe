import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import Info from '@/pages/products-detail/components/product-info/info'

import { IProductInfoProps } from '../product-review/review/Review.type'

function ProductInfo({
  productDetail,
  handleSheetDispatch,
}: IProductInfoProps) {
  const {
    name = '',
    operationDays,
    address = '',
    cityCode = '',
    rating = 0,
    reviews = [],
    images = [],
  } = productDetail || {}

  const city = LOCALE_CODE_LIST[cityCode]
  const district = address?.split(' ')[1]
  const imageArray = images?.map((item: { url: string }) => item.url) || []
  const reviewCount = Array.isArray(reviews) ? reviews.length : 0

  return (
    <Info
      productName={name}
      sellingDate={operationDays}
      address={`${city} ${district}`}
      rating={rating}
      reviewCnt={reviewCount}
      imageArray={imageArray}
      onShareClick={() => handleSheetDispatch('share-sheet')}
    />
  )
}

export default ProductInfo
