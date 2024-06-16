import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import { IProductDetail } from '@/store/product-slice/product-slice.type'

import Info from './info'

interface IProductInfoProps {
  productDetail: IProductDetail
  handleSheetDispatch: (name: string) => void
}

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
