import { useState } from 'react'

import kebabClickedIcon from '@/assets/common/kebab-click.svg'
import kebabIcon from '@/assets/common/kebab.svg'
import searchIcon from '@/assets/common/search.svg'
import PRODUCTTYPE from '@/constants/PRODUCTTYPE'
import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import BackBar from '@components/back-bar'
import CategorySection from '@components/category-section'
import SearchSheet from '@components/search-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './ProductHeader.style'

import type { IProductHeaderProps, ProductType } from './ProductHeader.type'

const ProductHeader: React.FC<IProductHeaderProps> = ({ kebabClick }) => {
  const [isKebabClicked, setIsKebabClicked] = useState(false)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const input = queryParams.get('input')
  const contentType = queryParams.get('type')
  const contentTypeIndex = contentType
    ? (Number(contentType) as ProductType)
    : undefined
  const category =
    contentTypeIndex !== undefined ? PRODUCTTYPE[contentTypeIndex] : input
  const handleKebabClick = () => {
    setIsKebabClicked(!isKebabClicked)
    kebabClick()
  }

  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )
  const handleSearchClick = () => {
    dispatch(sheet({ name: 'search-sheet', status: true, text: '' }))
  }
  if (sheetReducer.status && sheetReducer.name === 'search-sheet') {
    return <SearchSheet />
  }

  const kebabImg = isKebabClicked ? kebabClickedIcon : kebabIcon
  return (
    <>
      {isKebabClicked && (
        <S.ProductHeaderBackground
          onClick={() => {
            setIsKebabClicked(false)
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
          <S.Icon src={kebabImg} alt="kebab" onClick={handleKebabClick} />
        </S.IconWrapper>
        {isKebabClicked && <CategorySection />}
      </S.ProductHeaderContainer>
    </>
  )
}

export default ProductHeader
