import { useMemo, useState } from 'react'

import useInfiniteCardsQuery from '@/hooks/api/productsAPI/useInfiniteCardsQuery'
import useProductCardsParams from '@/hooks/api/productsAPI/useProductCardsParams'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import AppBar from '@/pages/products/components/app-bar'
import FilteringSheet from '@/pages/products/components/filtering-sheet'
import SortOrdersSheet from '@/pages/products/components/sort-orders-sheet'
import { SheetSliceState, sheet } from '@/store/sheet-slice.ts'

import ProductCard from '@components/product-card'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ProductsPage.style'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const cardsQueryData = useProductCardsParams()

  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const {
    data: cardData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteCardsQuery(cardsQueryData)

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
        <AppBar
          totalElements={totalElements}
          onOrderClick={handleOrderClick}
          onFilterClick={handleFilterClick}
        />
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
