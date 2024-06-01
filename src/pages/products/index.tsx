import { useMemo, useState } from 'react'

import useInfiniteCardsQuery from '@/hooks/api/productsAPI/useInfiniteCardsQuery'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import FilteringSheet from '@/pages/products/components/filtering-sheet'
import SortOrdersSheet from '@/pages/products/components/sort-orders-sheet'
import { SheetSliceState, sheet } from '@/store/sheet-slice.ts'

import ProductCard from '@components/product-card'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ProductsPage.style'

function ProductsPage() {
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const { data: cardData, hasNextPage, fetchNextPage } = useInfiniteCardsQuery()

  const cardsContents = useMemo(
    () => (cardData ? cardData.pages.flatMap((page) => page.content) : []),
    [cardData],
  )
  const totalElements = cardData?.pages[0]?.totalElements

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage) {
      await fetchNextPage()
    }
  })

  const dispatch = useDispatch()
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
              <S.ProductCount>({totalElements}개)</S.ProductCount>
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
        {hasNextPage && <S.Target ref={ref} />}
        {sheetReducer.status && sheetReducer.name === 'order-sheet' && (
          <SortOrdersSheet />
        )}
      </S.PageContainer>
    </>
  )
}

export default ProductsPage
