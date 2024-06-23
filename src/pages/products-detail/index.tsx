import { useCallback, useState } from 'react'

import useProductDetail from '@/hooks/api/productsAPI/useProductDetail'
import useRecommendProducts from '@/hooks/api/productsAPI/useRecommendProducts'
import useLoadMoreReviews from '@/hooks/api/reviewAPI/useLoadMoreReviews'
import NoProductPage from '@/pages/error/NoProductPage'
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
  const { productDetail, isProductDetailSuccess, isPending } =
    useProductDetail(productId)
  const [sort, setSort] = useState<string>('new')
  const { reviews, totalElements, handleLoadMoreReviews } = useLoadMoreReviews({
    productId,
    sort,
  })

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

  const handleSort = (order: string) => {
    setSort(order)
    dispatch(sheet({ name: '', status: false, text: '' }))
  }

  const handlePhotoReviewsClick = useCallback(() => {
    dispatch(sheet({ name: 'photo-reviews-sheet', status: true, text: '' }))
  }, [dispatch])

  if (isPending) {
    return <LoadingSpinner />
  }

  if (!productDetail || !productId) {
    return <NoProductPage />
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

  const scrollToReview = () => {
    document?.getElementById('review')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ProductHeader />
      <S.PageContainer
        $isSearchSheet={isSearchSheet}
        $isPhotoReviewsSheet={isPhotoReviewsSheet}
      >
        <ProductInfo
          productDetail={productDetail}
          handleSheetDispatch={handleSheetDispatch}
          onReviewClick={scrollToReview}
        />
        <ProductBasicInfo productDetail={productDetail} />
        <Description description={description} />
        <RecommendCard cards={recommendProducts} />
        <ProductReviews
          productDetail={productDetail}
          id="review"
          reviewData={reviewData}
          totalElements={totalElements}
          handleSheetDispatch={handleSheetDispatch}
          handlePhotoReviewsClick={handlePhotoReviewsClick}
        />
        {remainingReviews !== 0 && (
          <LoadMoreButton onClick={handleLoadMoreReviews} />
        )}
        <FooterReservation
          isBookmarked={true}
          isReservationProduct={true}
          price={price}
          buttontype="reservation"
          productId={productId}
        />
        <SheetRenderer
          shareSheetProps={shareSheetProps}
          reviewOrderSheetProps={{ handleSort }}
        />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
