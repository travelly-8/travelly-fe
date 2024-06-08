import { useState } from 'react'

import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
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
  const isPhotoReviewsSheet =
    sheetReducer.status && sheetReducer.name === 'photo-reviews-sheet'
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

  const handlePhotoReviewsClick = () => {
    dispatch(sheet({ name: 'photo-reviews-sheet', status: true, text: '' }))
  }

  if (isPhotoReviewsSheet) return <PhotoReviewsSheet reviewImg={mockData3} />

  return (
    <>
      <ProductHeader
        hamburgerClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
      />
      <S.PageContainer
        $isSearchSheet={isSearchSheet}
        $isPhotoReviewsSheet={isPhotoReviewsSheet}
      >
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
          onPhotoReviewsClick={handlePhotoReviewsClick}
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
          <ShareSheet
            address="서울 마포구 성산동 515-39"
            addressTitle="상암 월드컵 경기장"
            title="맨체스터 유나이티드 vs k리그 all-star"
            description="2025년 8월 1일 상암 월드컵 경기장에서 열리는 맨유 초청 방한 경기"
            imageUrl="https://img8.yna.co.kr/etc/inner/KR/2018/01/17/AKR20180117116400007_02_i_P4.jpg"
            commentCount={1000}
          />
        )}
        {sheetReducer.status && sheetReducer.name === 'edit-sheet' && (
          <EditSheet />
        )}
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
