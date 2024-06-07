import { useCallback, useState } from 'react'

import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'

import BasicInfo from './components/basic-info'
import Description from './components/description'
import EditSheet from './components/edit-sheet'
import Footer from './components/footer'
import Info from './components/info'
import RecommendCard from './components/recommend-card'
import Review from './components/review'
import ReviewOrderSheet from './components/review-order-sheet'
import ShareSheet from './components/share-sheet'
import { mockCard, mockData3, reviewData } from './mockData'
import * as S from './ProductsDetail.style'

import type { ISheetComponents } from './ProductsDetail.type'

const sheetComponents: ISheetComponents = {
  'review-order-sheet': ReviewOrderSheet,
  'share-sheet': ShareSheet,
  'edit-sheet': EditSheet,
}

const SheetModal = () => {
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const SheetComponent = sheetReducer.status
    ? sheetComponents[sheetReducer.name as keyof ISheetComponents]
    : null

  return SheetComponent ? <SheetComponent /> : null
}

const ProductsDetail = () => {
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

  return (
    <>
      <ProductHeader
        hamburgerClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
      />
      <S.PageContainer $isSearchSheet={isSearchSheet}>
        <Info
          productName="상품명"
          sellingDate="2024.00.00~00.00"
          address="서울시 강남구"
          rating="4.5"
          reviewCnt={111}
          onShareClick={() => handleSheetDispatch('share-sheet')}
        />
        <BasicInfo
          address="서울시 강남구"
          detailAddress="개포동 117"
          companyName="트래블리"
          phoneNumber="02-1234-1234"
          website="www.naver.com"
        />
        <Description />
        <RecommendCard cards={mockCard} />
        <Review
          reviewCnt={111}
          reviewImg={mockData3}
          reviewData={reviewData}
          onOrderClick={() => handleSheetDispatch('review-order-sheet')}
          onEditClick={() => handleSheetDispatch('edit-sheet')}
        />
        <Footer
          isBookmarked={true}
          isReservationProduct={true}
          discount={20}
          price={20000}
        />
        <SheetModal />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
