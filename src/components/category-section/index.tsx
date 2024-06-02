import CATEGORYLIST from '@/constants/CATEGORYLIST'

import NavigateButton from '@components/navigate-button'

import * as S from './CategorySection.style'

const CategorySection = () => {
  return (
    <S.CategoryContainer>
      {CATEGORYLIST.map((category) => (
        <NavigateButton
          key={category.description}
          img={category.img}
          description={category.description}
          url={category.url}
        />
      ))}
    </S.CategoryContainer>
  )
}

export default CategorySection
