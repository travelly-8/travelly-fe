import BasicInfo from './basic-info'

function ProductBasicInfo({ productDetail }) {
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
