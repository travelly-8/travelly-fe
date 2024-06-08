import { useCallback, useState } from 'react'

import { getProductDetail, getSearchProducts } from '@/api/productsAPI'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
import PhotoReviewsSheet from '@/pages/products-detail/components/photo-reviews-sheet'
import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import ProductHeader from '@components/product-header'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BasicInfo from './components/basic-info'
import Description from './components/description'
import Footer from './components/footer'
import Info from './components/info'
import RecommendCard from './components/recommend-card'
import Review from './components/review'
import SheetRenderer from './components/sheet-renderer'
import { mockCard, reviewData as const_review_data } from './mockData'
import * as S from './ProductsDetail.style'

import type { ISheetComponents } from './ProductsDetail.type'

import { IProductCardData } from '@components/product-card/ProductCard.type.ts'

function ProductsDetail() {
  const { productId } = useParams()
  const { data: productDetailQuery, isSuccess: isProductDetailSuccess } =
    useQuery({
      queryKey: ['products-detail', productId],
      queryFn: ({ queryKey }) => getProductDetail(Number(queryKey[1])),
    })
  const {
    address = '',
    cityCode = '',
    detailAddress = '',
    homepage = '',
    name = '',
    description = '',
    rating = 0,
    reviewCount = 0,
    phoneNumber = '',
    ticketDto = [],
  } = productDetailQuery?.data || {}

  const recommendQueryData = {
    page: 0,
    size: 5,
    keyword: address.split(' ')[1],
    cityCode: cityCode,
  }
  const { data: recommendProductQuery } = useQuery({
    queryKey: ['recommend-products'],
    queryFn: () => getSearchProducts(recommendQueryData),
    enabled: isProductDetailSuccess,
  })
  const recommendProductData = recommendProductQuery?.data.content.filter(
    (product: IProductCardData) => product.id.toString() !== productId,
  )

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

  const reviewData = const_review_data
  const reviewImg = reviewData?.reduce(
    (acc: string[], review) => acc.concat(review.image),
    [],
  )

  if (isPhotoReviewsSheet) return <PhotoReviewsSheet reviewImg={reviewImg} />

  const shareSheetProps = {
    address: address,
    addressTitle: detailAddress,
    title: name,
    description: description,
    imageUrl:
      'https://img8.yna.co.kr/etc/inner/KR/2018/01/17/AKR20180117116400007_02_i_P4.jpg',
    commentCount: reviewCount,
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
        <RecommendCard cards={recommendProductData || mockCard} />
        <Review
          reviewCnt={reviewCount}
          reviewImg={reviewImg}
          reviewData={const_review_data}
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
        <SheetRenderer shareSheetProps={shareSheetProps} />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
