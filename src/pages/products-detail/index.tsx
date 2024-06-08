import { useCallback, useState } from 'react'

import { getProductDetail } from '@/api/productsAPI'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import ProductHeader from '@components/product-header'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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

function ProductsDetail() {
  const { productId } = useParams()
  const { data } = useQuery({
    queryKey: ['products-detail', productId],
    queryFn: ({ queryKey }) => getProductDetail(Number(queryKey[1])),
  })
  const {
    address = '',
    cityCode = '',
    detailAddress = '',
    homepage = '',
    name = '',
    rating = 0,
    reviewCount = 0,
    phoneNumber = '',
    ticketDto = [],
  } = data?.data || {}

  const city = LOCALE_CODE_LIST[cityCode]
  const district = address?.split(' ')[1]
  const price = ticketDto[0]?.price

  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'
  const isPhotoReviewsSheet =
    sheetReducer.status && sheetReducer.name === 'photo-reviews-sheet'
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

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
          productName={name}
          sellingDate="2024.00.00~00.00"
          address={`${city} ${district}`}
          rating={rating}
          reviewCnt={111}
          onShareClick={() => handleSheetDispatch('share-sheet')}
        />
        <BasicInfo
          address={address}
          detailAddress={detailAddress}
          companyName="트래블리"
          phoneNumber={phoneNumber}
          website={homepage}
        />
        <Description />
        <RecommendCard cards={mockCard} />
        <Review
          reviewCnt={reviewCount}
          reviewImg={mockData3}
          reviewData={reviewData}
          onOrderClick={() => handleSheetDispatch('review-order-sheet')}
          onEditClick={() => handleSheetDispatch('edit-sheet')}
          onPhotoReviewsClick={handlePhotoReviewsClick}
        />
        <Footer
          isBookmarked={true}
          isReservationProduct={true}
          discount={20}
          price={price}
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
