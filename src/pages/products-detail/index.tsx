import { getAllProducts, getProductDetail } from '@/api/productsAPI'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
import Review from '@/pages/products-detail/components/review'
import { setProductDetail } from '@/store/product-slice/product-slice'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { RootState } from '@/store/store'
import FooterReservation from '@components/footer-reservation'
import { IProductCardData } from '@components/product-card/ProductCard.type'
import ProductHeader from '@components/product-header'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as S from './ProductsDetail.style'
import type { ISheetComponents } from './ProductsDetail.type'
import BasicInfo from './components/basic-info'
import Description from './components/description'
import Info from './components/info'
import RecommendCard from './components/recommend-card'
import SheetRenderer from './components/sheet-renderer'

function ProductsDetail() {
  const { productId } = useParams()
  const dispatch = useDispatch()

  const { data: productDetailQuery, isSuccess: isProductDetailSuccess } =
    useQuery({
      queryKey: ['products-detail', productId],
      queryFn: ({ queryKey }) => getProductDetail(Number(queryKey[1])),
    })

  useEffect(() => {
    if (productDetailQuery?.data) {
      dispatch(setProductDetail(productDetailQuery.data))
    }
  }, [productDetailQuery, dispatch])

  const productDetail = useSelector((state: RootState) => state.product.detail)
  const {
    address = '',
    cityCode = '',
    detailAddress = '',
    homepage = '',
    images,
    name = '',
    operationDays,
    description = '',
    rating = 0,
    reviewCount = 0,
    phoneNumber = '',
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

  const city = LOCALE_CODE_LIST[cityCode]
  const district = address?.split(' ')[1]
  const price = ticketDto[0]?.price
  const imageArray = images?.map((item) => item.url) || []

  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
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

  const reviewData = reviews?.map((reviewItem) => ({
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
  }))

  const reviewImg = reviewData?.reduce(
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
        <Info
          productName={name}
          sellingDate={operationDays}
          address={`${city} ${district}`}
          rating={rating}
          reviewCnt={111}
          imageArray={imageArray}
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
        <RecommendCard
          cards={
            distanceRecommendProductData?.length > 0
              ? distanceRecommendProductData
              : ratingRecommendProductData
          }
        />

        <Review
          reviewCnt={reviewData?.length}
          reviewImg={reviewImg}
          reviewData={reviewData}
          onOrderClick={() => handleSheetDispatch('review-order-sheet')}
          onEditClick={() => handleSheetDispatch('edit-sheet')}
          onPhotoReviewsClick={handlePhotoReviewsClick}
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
