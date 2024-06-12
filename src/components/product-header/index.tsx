import { useState } from 'react'

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

import type { IProductHeaderProps, ProductType } from './ProductHeader.type'

const ProductHeader: React.FC<IProductHeaderProps> = ({ hamburgerClick }) => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const input = queryParams.get('input')
  const contentType = queryParams.get('type')
  const contentTypeIndex = contentType
    ? (Number(contentType) as ProductType)
    : undefined
  const category =
    contentTypeIndex !== undefined ? PRODUCT_TYPE[contentTypeIndex] : input
  const handleHamburgerClick = () => {
    setIsHamburgerClicked(!isHamburgerClicked)
    hamburgerClick()
  }

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

  const hamburgerImg = isHamburgerClicked ? hamburgerClickedIcon : hamburgerIcon
  return (
    <>
      {isHamburgerClicked && (
        <S.ProductHeaderBackground
          onClick={() => {
            setIsHamburgerClicked(false)
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
            src={hamburgerImg}
            alt="hamburger"
            onClick={handleHamburgerClick}
          />
        </S.IconWrapper>
        {isHamburgerClicked && <CategorySection />}
      </S.ProductHeaderContainer>
    </>
  )
}

export default ProductHeader
