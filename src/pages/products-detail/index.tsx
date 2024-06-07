import { useState } from 'react'

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

const ProductsDetail = () => {
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const handleOrderClick = () => {
    dispatch(sheet({ name: 'review-order-sheet', status: true, text: '' }))
  }

  const handleShareClick = () => {
    dispatch(sheet({ name: 'share-sheet', status: true, text: '' }))
  }

  const handleEditClick = () => {
    dispatch(sheet({ name: 'edit-sheet', status: true, text: '' }))
  }

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
          onShareClick={handleShareClick}
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
          onOrderClick={handleOrderClick}
          onEditClick={handleEditClick}
        />
        <Footer
          isBookmarked={true}
          isReservationProduct={true}
          discount={20}
          price={20000}
        />
        {sheetReducer.status && sheetReducer.name === 'review-order-sheet' && (
          <ReviewOrderSheet />
        )}
        {sheetReducer.status && sheetReducer.name === 'share-sheet' && (
          <ShareSheet />
        )}
        {sheetReducer.status && sheetReducer.name === 'edit-sheet' && (
          <EditSheet />
        )}
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
