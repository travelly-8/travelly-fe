import { useCallback, useState } from 'react'

import { getProductDetail } from '@/api/productsAPI'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING'
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
        />
        <Footer
          isBookmarked={true}
          isReservationProduct={true}
          discount={20}
          price={price}
        />
        <SheetRenderer />
      </S.PageContainer>
    </>
  )
}

export default ProductsDetail
