import { useCallback, useState } from 'react'

import useProductDetail from '@/hooks/api/productsAPI/useProductDetail'
import useRecommendProducts from '@/hooks/api/productsAPI/useRecommendProducts'
import useLoadMoreReviews from '@/hooks/api/reviewAPI/useLoadMoreReviews'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import { changeReviewData } from '@/utils/changeReviewData'

import FooterReservation from '@components/footer-reservation'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Description from './components/description'
import LoadMoreButton from './components/load-more-button'
import PhotoReviewsSheet from './components/photo-reviews-sheet'
import ProductBasicInfo from './components/product-basic-info'
import ProductInfo from './components/product-info'
import ProductReviews from './components/product-review'
import RecommendCard from './components/recommend-card'
import SheetRenderer from './components/sheet-renderer'
import LoadingSpinner from './LoadingSpinner'
import * as S from './ProductsDetail.style'

function ProductsDetail() {
  const { productId } = useParams<{ productId: string }>()
  const dispatch = useDispatch()
  const { productDetail, isProductDetailSuccess, isLoading } =
    useProductDetail(productId)
  const { reviews, totalElements, handleLoadMoreReviews } =
    useLoadMoreReviews(productId)
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const {
    address = '',
    cityCode = '',
    detailAddress = '',
    name = '',
    description = '',
    reviewCount = 0,
    images = [],
    ticketDto = [],
  } = productDetail || {}

  const recommendProducts = useRecommendProducts({
    productId,
    address,
    cityCode,
    isProductDetailSuccess,
  })

  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'
  const isPhotoReviewsSheet =
    sheetReducer.status && sheetReducer.name === 'photo-reviews-sheet'

  const handleSheetDispatch = useCallback(
    (name: string) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

  const handlePhotoReviewsClick = useCallback(() => {
    dispatch(sheet({ name: 'photo-reviews-sheet', status: true, text: '' }))
  }, [dispatch])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!productDetail || !productId) {
    return null
  }

  const price = ticketDto[0]?.price

  const reviewData = reviews
    ? changeReviewData(reviews as IReviewDetailData[], productId, name, price)
    : []
  const reviewImg = reviewData.reduce<string[]>(
    (acc: string[], review) => acc.concat(review.reviewImages),
    [],
  )
  const remainingReviews = Math.max(totalElements - reviews.length, 0)

  if (isPhotoReviewsSheet) return <PhotoReviewsSheet reviewImg={reviewImg} />

  const shareSheetProps = {
    address: address || '',
    addressTitle: detailAddress || '',
    title: name || '',
    description: description || '',
    imageUrl: images[0]?.url,
    commentCount: reviewCount || 0,
  }

  return (
    <>
      <ProductHeader
        hamburgerClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
      />
      <S.PageContainer
        $isSearchSheet={isSearchSheet}
        $isPhotoReviewsSheet={isPhotoReviewsSheet}
      >
        <ProductInfo
          productDetail={productDetail}
          handleSheetDispatch={handleSheetDispatch}
        />
        <ProductBasicInfo productDetail={productDetail} />
        <Description description={description} />
        <RecommendCard cards={recommendProducts} />

        <ProductReviews
          reviewData={reviewData}
          totalElements={totalElements}
          handleSheetDispatch={handleSheetDispatch}
          handlePhotoReviewsClick={handlePhotoReviewsClick}
        />
        {remainingReviews !== 0 && (
          <LoadMoreButton
            onClick={handleLoadMoreReviews}
            remainingReviews={remainingReviews}
          />
        )}
        <FooterReservation
          isBookmarked={true}
          isReservationProduct={true}
          price={price}
          buttontype="reservation"
          productId={productId}
        />
        <SheetRenderer shareSheetProps={shareSheetProps} />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
