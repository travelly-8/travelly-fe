import { useCallback, useState } from 'react'

import useProductDetail from '@/hooks/api/productsAPI/useProductDetail'
import useRecommendProducts from '@/hooks/api/productsAPI/useRecommendProducts'
import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'
import { changeReviewData } from '@/utils/changeReviewData'

import FooterReservation from '@components/footer-reservation'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Description from './components/description'
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
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const {
    address = '',
    cityCode = '',
    detailAddress = '',
    name = '',
    description = '',
    reviewCount = 0,
    ticketDto = [],
    reviews = [],
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

  const reviewData = changeReviewData(
    reviews as IReviewDetailData[],
    productId,
    name,
    price,
  )

  const reviewImg = reviewData.reduce<string[]>(
    (acc: string[], review) => acc.concat(review.reviewImages),
    [],
  )

  if (isPhotoReviewsSheet) return <PhotoReviewsSheet reviewImg={reviewImg} />

  const shareSheetProps = {
    address: address || '',
    addressTitle: detailAddress || '',
    title: name || '',
    description: description || '',
    imageUrl:
      'https://img8.yna.co.kr/etc/inner/KR/2018/01/17/AKR20180117116400007_02_i_P4.jpg',
    commentCount: reviewCount || 0,
  } as const

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
        <Description />
        <RecommendCard cards={recommendProducts} />

        <ProductReviews
          reviewData={reviewData}
          handleSheetDispatch={handleSheetDispatch}
          handlePhotoReviewsClick={handlePhotoReviewsClick}
        />
        <FooterReservation
          isBookmarked={true}
          isReservationProduct={true}
          discount={0}
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
