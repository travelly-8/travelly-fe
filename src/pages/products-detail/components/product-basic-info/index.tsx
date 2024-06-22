import BasicInfo from '@/pages/products-detail/components/product-basic-info/basic-info'

import { IProductBasicInfoProps } from '../product-review/review/Review.type'

function ProductBasicInfo({ productDetail }: IProductBasicInfoProps) {
  const {
    address = '',
    detailAddress = '',
    phoneNumber = '',
    homepage = '',
  } = productDetail || {}

  return (
    <BasicInfo
      address={address}
      detailAddress={detailAddress}
      companyName="트래블리"
      phoneNumber={phoneNumber}
      website={homepage}
    />
  )
}

export default ProductBasicInfo
