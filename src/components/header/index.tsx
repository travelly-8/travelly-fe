import { useEffect, useState } from 'react'

import alarmIcon from '@/assets/common/alarm.svg'
import hamburgerClickedIcon from '@/assets/common/hamburger-click.svg'
import hamburgerIcon from '@/assets/common/hamburger.svg'
import searchIcon from '@/assets/common/search.svg'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'
import type { ISheetSliceState } from '@/store/sheet-slice/sheet-slice.type'
import { RootState } from '@/store/store'

import CategorySection from '@components/category-section'
import SearchSheet from '@components/search-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './Header.style'
import { IHeaderProps } from './Header.type'

const Header: React.FC<IHeaderProps> = ({ hamburgerClick }) => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sheetReducer = useSelector(
    (state: ISheetSliceState) => state.sheet.value,
  )
  const authState = useSelector((state: RootState) => state.auth)
  const { role } = authState

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
  const handleHamburgerClick = () => {
    setIsHamburgerClicked(!isHamburgerClicked)
    hamburgerClick()
  }
  const hamburgerImg = isHamburgerClicked ? hamburgerClickedIcon : hamburgerIcon
  return (
    <>
      {isHamburgerClicked && (
        <S.HeaderBackground
          onClick={() => {
            setIsHamburgerClicked(false)
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
          {role && (
            <S.Icon
              src={alarmIcon}
              alt="alarm"
              onClick={() => navigate('/notification')}
            />
          )}
          <S.Icon
            src={hamburgerImg}
            alt="hamburger"
            onClick={handleHamburgerClick}
          />
        </S.IconContainer>
        {isHamburgerClicked && <CategorySection />}
      </S.HeaderContainer>
    </>
  )
}

export default Header
