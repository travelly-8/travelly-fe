import { useState } from 'react'

import { getSearchProducts } from '@/api/productsAPI'
import useGetSearchProducts from '@/hooks/api/productsAPI/useGetSearchProducts'
import FilteringSheet from '@/pages/products/components/filtering-sheet'
import SortOrdersSheet from '@/pages/products/components/sort-orders-sheet'
import { SheetSliceState, sheet } from '@/store/sheet-slice.ts'
import { ISearchProductsData } from '@/types/postProductData.type'

import ProductCard from '@components/product-card'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './ProductsPage.style'

const sortField: { [key: string]: string } = {
  최신순: 'modifiedDate',
  '리뷰 많은 순': 'reviewCount',
  평점순: 'rating',
  '낮은 가격순': 'price',
}

function ProductsPage() {
  const [isKebabClicked, setIsKebabClicked] = useState(false)

  const dispatch = useDispatch()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const input = queryParams.get('input')
  const type = queryParams.get('type')
  const minPrice = queryParams.get('minPrice')
  const maxPrice = queryParams.get('maxPrice')
  // const startTime = queryParams.get('startTime')
  // const endTime = queryParams.get('endTime')
  const date = queryParams.get('date')
  const city = queryParams.get('city')
  const sort = queryParams.get('sort')

  const queryData: ISearchProductsData = {
    page: 1,
    size: 10,
    sortField: sort ? sortField[sort] : undefined,
    sortType: undefined,
    keyword: input || undefined,
    cityCode: city === '0' ? undefined : (city as string),
    contentType:
      type === '0' || type === undefined ? undefined : (type as string),
    startDate: date || undefined,
    endDate: date || undefined,
    startTime: undefined,
    endTime: undefined,
    minPrice: Number(minPrice) || undefined,
    maxPrice: Number(maxPrice) || undefined,
  }

  const { data } = useGetSearchProducts(queryData, getSearchProducts, queryData)
  const cardsContents = data?.content

  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  const handleOrderClick = () => {
    dispatch(sheet({ name: 'order-sheet', status: true, text: '' }))
  }

  const handleFilterClick = () => {
    dispatch(sheet({ name: 'filter-sheet', status: true, text: '' }))
  }

  if (sheetReducer.status && sheetReducer.name === 'filter-sheet') {
    return <FilteringSheet />
  }
  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'

  return (
    <>
      <ProductHeader kebabClick={() => setIsKebabClicked(!isKebabClicked)} />
      <S.PageContainer $isSearchSheet={isSearchSheet}>
        <S.AppBarWrapper>
          <S.AppBar>
            <S.ProductInfo>
              <S.ProductType>상품</S.ProductType>
              <S.ProductCount>(00,000개)</S.ProductCount>
            </S.ProductInfo>
            <S.OrderFilterWrapper>
              <S.Order onClick={handleOrderClick}>정렬</S.Order>
              <S.Filter onClick={handleFilterClick}>
                <img src="/src/assets/products/filter.svg" alt="필터" />
              </S.Filter>
            </S.OrderFilterWrapper>
          </S.AppBar>
        </S.AppBarWrapper>
        <S.AllProductsSection>
          <S.AllCardWrapper>
            {cardsContents?.map((cardData) => (
              <ProductCard key={cardData.id} cardData={cardData} size="bg" />
            ))}
          </S.AllCardWrapper>
        </S.AllProductsSection>
        {sheetReducer.status && sheetReducer.name === 'order-sheet' && (
          <SortOrdersSheet />
        )}
      </S.PageContainer>
    </>
  )
}

export default ProductsPage
