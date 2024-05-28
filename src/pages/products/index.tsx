import { mockData2 } from '@/constants/MOCK_DATA'
import FilteringSheet from '@/pages/products/components/filtering-sheet'
import SortOrdersSheet from '@/pages/products/components/sort-orders-sheet'
import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import ProductCard from '@components/product-card'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './ProductsPage.style'

function ProductsPage() {
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

  return (
    <S.PageContainer>
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
          {mockData2.map((cardData) => (
            <ProductCard key={cardData.name} cardData={cardData} size="bg" />
          ))}
        </S.AllCardWrapper>
      </S.AllProductsSection>
      {sheetReducer.status && sheetReducer.name === 'order-sheet' && (
        <SortOrdersSheet />
      )}
    </S.PageContainer>
  )
}

export default ProductsPage
