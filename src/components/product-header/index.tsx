import hamburgerClickedIcon from '@/assets/common/hamburger-click.svg'
import hamburgerIcon from '@/assets/common/hamburger.svg'
import searchIcon from '@/assets/common/search.svg'
import PRODUCT_TYPE from '@/constants/PRODUCT_TYPE'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'

import BackBar from '@components/back-bar'
import CategorySection from '@components/category-section'
import SearchSheet from '@components/search-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './ProductHeader.style'

import type { ProductType } from './ProductHeader.type'

const ProductHeader = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const input = queryParams.get('input')
  const contentType = queryParams.get('type')
  const contentTypeIndex = contentType
    ? (Number(contentType) as ProductType)
    : undefined
  const category =
    contentTypeIndex !== undefined ? PRODUCT_TYPE[contentTypeIndex] : input

  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const handleSearchClick = () => {
    dispatch(sheet({ name: 'search-sheet', status: true, text: '' }))
  }
  if (sheetReducer.status && sheetReducer.name === 'search-sheet') {
    return <SearchSheet />
  }

  const isOpen = sheetReducer.status && sheetReducer.name === 'category-sheet'

  return (
    <>
      {isOpen && (
        <S.ProductHeaderBackground
          onClick={() => {
            dispatch(sheet({ name: 'category-sheet', status: false, text: '' }))
          }}
        />
      )}
      <S.ProductHeaderContainer>
        <S.BackBarContainer>
          <BackBar />
          <S.Category>{category}</S.Category>
        </S.BackBarContainer>
        <S.IconWrapper>
          <S.Icon src={searchIcon} alt="search" onClick={handleSearchClick} />
          <S.Icon
            src={isOpen ? hamburgerClickedIcon : hamburgerIcon}
            alt="hamburger"
            onClick={() =>
              dispatch(
                sheet({
                  name: 'category-sheet',
                  status: !isOpen,
                  text: '',
                }),
              )
            }
          />
        </S.IconWrapper>
        {isOpen && <CategorySection />}
      </S.ProductHeaderContainer>
    </>
  )
}

export default ProductHeader
