import alarmIcon from '@/assets/common/alarm.svg'
import kebabClickedIcon from '@/assets/common/kebab-click.svg'
import kebabIcon from '@/assets/common/kebab.svg'
import searchIcon from '@/assets/common/search.svg'
import concert from '@/assets/header/concert.svg'
import culture from '@/assets/header/culture.svg'
import entire from '@/assets/header/entire.svg'
import food from '@/assets/header/food.svg'
import leisure from '@/assets/header/leisure.svg'
import shop from '@/assets/header/shop.svg'
import travelcourse from '@/assets/header/travelcourse.svg'
import travelspot from '@/assets/header/travelspot.svg'
import NavigatetButton from '@components/naviagte-button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Header.style'
import { IHeaderProps } from './Header.type'

const CategorySection = () => {
  const categoryList = [
    { img: entire, description: '전체', type: 0 },
    { img: travelspot, description: '관광지', type: 12 },
    { img: culture, description: '문화시설', type: 14 },
    { img: concert, description: '공연/행사', type: 15 },
    { img: travelcourse, description: '여행 코스', type: 25 },
    { img: leisure, description: '레포츠', type: 28 },
    { img: shop, description: '쇼핑', type: 38 },
    { img: food, description: '음식', type: 39 },
  ]

  return (
    <S.CategoryContainer>
      {categoryList.map((category) => (
        <NavigatetButton
          key={category.description}
          img={category.img}
          description={category.description}
          type={category.type}
        />
      ))}
    </S.CategoryContainer>
  )
}

const Header: React.FC<IHeaderProps> = ({ kebabClick }) => {
  const [isKebabClicked, setIsKebabClicked] = useState(false)
  const navigate = useNavigate()
  const handleSearchClick = () => {
    navigate('/search')
  }
  const handleLabelClick = () => {
    navigate('/')
  }
  const handleKebabClick = () => {
    setIsKebabClicked(!isKebabClicked)
    kebabClick(!isKebabClicked)
  }
  const kebabImg = isKebabClicked ? kebabClickedIcon : kebabIcon
  return (
    <S.HeaderContainer>
      <S.Label onClick={handleLabelClick}>Travelly</S.Label>
      <S.IconContainer>
        <S.Icon src={searchIcon} alt="search" onClick={handleSearchClick} />
        <S.Icon src={alarmIcon} alt="alarm" />
        <S.Icon src={kebabImg} alt="kebab" onClick={handleKebabClick} />
      </S.IconContainer>
      {isKebabClicked && <CategorySection />}
    </S.HeaderContainer>
  )
}

export default Header
