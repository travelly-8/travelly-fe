import { useCallback, useState } from 'react'

import { getAllProducts } from '@/api/productsAPI'
import useProductDetail from '@/hooks/api/productsAPI/useProductDetail'
import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { IReviewDetailData } from '@/types/getReviewDetailData.type'

import FooterReservation from '@components/footer-reservation'
import { IProductCardData } from '@components/product-card/ProductCard.type'
import ProductHeader from '@components/product-header'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Description from './components/description'
import ProductBasicInfo from './components/product-basic-info'
import ProductInfo from './components/product-info'
import ProductReviews from './components/product-review'
import RecommendCard from './components/recommend-card'
import SheetRenderer from './components/sheet-renderer'
import * as S from './ProductsDetail.style'

import type { ISheetComponents } from './ProductsDetail.type'

function ProductsDetail() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { productDetail, isProductDetailSuccess } = useProductDetail(productId)
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

  const distanceRecommendQueryData = {
    page: 0,
    size: 5,
    keyword: address.split(' ')[1],
    cityCode: cityCode,
  }

  const { data: distanceRecommendProductQuery } = useQuery({
    queryKey: ['recommend-products', 'distance'],
    queryFn: () => getAllProducts(distanceRecommendQueryData),
    enabled: isProductDetailSuccess,
  })

  const distanceRecommendProductData =
    distanceRecommendProductQuery?.data.content.filter(
      (product: IProductCardData) => product.id.toString() !== productId,
    )

  const ratingRecommendQueryData = {
    page: 0,
    size: 5,
    sort: 'HighestRating',
  }

  const { data: ratingRecommendQuery } = useQuery({
    queryKey: ['recommend-products', 'highestRating'],
    queryFn: () => getAllProducts(ratingRecommendQueryData),
  })
  const ratingRecommendProductData = ratingRecommendQuery?.data.content.filter(
    (product: IProductCardData) => product.id.toString() !== productId,
  )

  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'
  const isPhotoReviewsSheet =
    sheetReducer.status && sheetReducer.name === 'photo-reviews-sheet'

  const handleSheetDispatch = useCallback(
    (name: keyof ISheetComponents) => {
      dispatch(sheet({ name, status: true, text: '' }))
    },
    [dispatch],
  )

  const handlePhotoReviewsClick = () => {
    dispatch(sheet({ name: 'photo-reviews-sheet', status: true, text: '' }))
  }

  const price = ticketDto[0]?.price

  const reviewData = ((reviews as IReviewDetailData[]) || [])?.map(
    (reviewItem) => ({
      productId: productId,
      productName: name,
      productPrice: price,
      reviewId: reviewItem.reviewId,
      reviewImages: reviewItem.reviewImages,
      reviewUserNickname: reviewItem.reviewUserNickname,
      reviewUserImage: reviewItem.reviewUserImage,
      rating: reviewItem.rating,
      reviewDate: reviewItem.reviewDate,
      reviewContent: reviewItem.reviewContent,
      comments: reviews,
      likeCnt: reviewItem.likeCount,
    }),
  )
  const reviewImg = (reviewData || []).reduce<string[]>(
    (acc, review) => acc.concat(review.reviewImages),
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
        <RecommendCard
          cards={
            distanceRecommendProductData?.length > 0
              ? distanceRecommendProductData
              : ratingRecommendProductData
          }
        />

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
