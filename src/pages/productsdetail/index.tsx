import { useState } from 'react'

import { SheetSliceState } from '@/store/sheet-slice.ts'

import ProductHeader from '@components/product-header'
import { useSelector } from 'react-redux'

import BasicInfo from './components/basicinfo'
import Description from './components/description'
import Info from './components/info'
import * as S from './ProductsDetail.style'
const ProductsDetail = () => {
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  return (
    <>
      <ProductHeader kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <S.PageContainer
        $isKebabClicked={isKebabClicked}
        $isSheet={sheetReducer.status}
      >
        <Info
          productName="상품명"
          sellingDate="2024.00.00~00.00"
          address="서울시 강남구"
          rating="4.5"
          reviewCnt={111}
        />
        <BasicInfo
          address="서울시 강남구"
          detailAddress="개포동 개포로117"
          companyName="트래블리"
          phoneNumber="02-1234-1234"
          website="www.naver.com"
        />
        <Description />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
