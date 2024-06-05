import { useEffect, useState } from 'react'

import alarmIcon from '@/assets/common/alarm.svg'
import kebabClickedIcon from '@/assets/common/kebab-click.svg'
import kebabIcon from '@/assets/common/kebab.svg'
import searchIcon from '@/assets/common/search.svg'
import { sheet, SheetSliceState } from '@/store/sheet-slice.ts'

import CategorySection from '@components/category-section'
import SearchSheet from '@components/search-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './Header.style'
import { IHeaderProps } from './Header.type'

const Header: React.FC<IHeaderProps> = ({ kebabClick }) => {
  const [isKebabClicked, setIsKebabClicked] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: SheetSliceState) => state.sheet.value,
  )

  useEffect(() => {
    dispatch(sheet({ name: 'home-sheet', status: false, text: '' }))
  }, [])

  const handleSearchClick = () => {
    dispatch(sheet({ name: 'home-sheet', status: true, text: '' }))

    return
  }
  if (sheetReducer.status) {
    return <SearchSheet />
  }
  const handleLabelClick = () => {
    navigate('/')
  }
  const handleKebabClick = () => {
    setIsKebabClicked(!isKebabClicked)
    kebabClick()
  }
  const kebabImg = isKebabClicked ? kebabClickedIcon : kebabIcon
  return (
    <>
      {isKebabClicked && (
        <S.HeaderBackground
          onClick={() => {
            setIsKebabClicked(false)
          }}
        />
      )}
      <S.HeaderContainer>
        <S.Label onClick={handleLabelClick}>Travelly</S.Label>
        <S.IconContainer>
          <S.Icon
            src={searchIcon}
            alt="search"
            onClick={() => handleSearchClick()}
          />
          <S.Icon src={alarmIcon} alt="alarm" />
          <S.Icon src={kebabImg} alt="kebab" onClick={handleKebabClick} />
        </S.IconContainer>
        {isKebabClicked && <CategorySection />}
      </S.HeaderContainer>
    </>
  )
}

export default Header
