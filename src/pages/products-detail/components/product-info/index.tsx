import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import Info from '@/pages/products-detail/components/product-info/info'

import { IProductInfoProps } from '../product-review/review/Review.type'

function ProductInfo({
  productDetail,
  handleSheetDispatch,
  onReviewClick,
}: IProductInfoProps) {
  const {
    name = '',
    operationDays,
    address = '',
    cityCode = '',
    rating = 0,
    reviewCount = 0,
    images = [],
  } = productDetail || {}

  const city = LOCALE_CODE_LIST[cityCode]
  const district = address?.split(' ')[1]
  const imageArray = images?.map((item: { url: string }) => item.url) || []
  const formattedRating = +rating.toFixed(1)

  return (
    <Info
      productName={name}
      sellingDate={operationDays}
      address={`${city} ${district}`}
      rating={formattedRating}
      reviewCnt={reviewCount}
      imageArray={imageArray}
      onShareClick={() => handleSheetDispatch('share-sheet')}
      onReviewClick={onReviewClick}
    />
  )
}

export default ProductInfo
