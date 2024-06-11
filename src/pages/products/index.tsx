import { useMemo, useState } from 'react'

import useInfiniteCardsQuery from '@/hooks/api/productsAPI/useInfiniteCardsQuery'
import useProductCardsParams from '@/hooks/api/productsAPI/useProductCardsParams'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import AppBar from '@/pages/products/components/app-bar'
import CardOrdersSheet from '@/pages/products/components/card-orders-sheet'
import FilteringSheet from '@/pages/products/components/filtering-sheet'
import { sheet } from '@/store/sheet-slice/sheet-slice'

import ProductCard from '@components/product-card'
import ProductCardSkeleton from '@components/product-card/ProductCardSkeleton'
import ProductHeader from '@components/product-header'
import { useDispatch, useSelector } from 'react-redux'

import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import * as S from './ProductsPage.style'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const cardsQueryData = useProductCardsParams()

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)
  const {
    data: cardData,
    hasNextPage,
    fetchNextPage,
    isPending,
    isFetchingNextPage,
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
    (state: ISheetSliceState) => state.sheet.value,
  )

  const isSearchSheet =
    sheetReducer.status && sheetReducer.name === 'search-sheet'

  const handleOrderClick = () => {
    dispatch(sheet({ name: 'card-order-sheet', status: true, text: '' }))
  }
  const handleFilterClick = () => {
    dispatch(sheet({ name: 'filter-sheet', status: true, text: '' }))
  }
  if (sheetReducer.status && sheetReducer.name === 'filter-sheet') {
    return <FilteringSheet />
  }

  return (
    <>
      <ProductHeader
        hamburgerClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
      />
      <S.PageContainer $isSearchSheet={isSearchSheet}>
        <AppBar
          totalElements={totalElements}
          onOrderClick={handleOrderClick}
          onFilterClick={handleFilterClick}
        />
        <S.AllProductsSection>
          <S.AllCardWrapper>
            {isPending && !cardsContents.length ? (
              <ProductCardSkeleton count={cardsQueryData.size} size="bg" />
            ) : (
              cardsContents.map((cardData) => (
                <ProductCard key={cardData.id} cardData={cardData} size="bg" />
              ))
            )}
            {isFetchingNextPage && (
              <ProductCardSkeleton count={cardsQueryData.size} size="bg" />
            )}
          </S.AllCardWrapper>
        </S.AllProductsSection>
        {hasNextPage && <S.Target ref={ref} />}
        {sheetReducer.status && sheetReducer.name === 'card-order-sheet' && (
          <CardOrdersSheet />
        )}
      </S.PageContainer>
    </>
  )
}

export default ProductsPage
