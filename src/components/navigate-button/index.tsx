import { useNavigate } from 'react-router-dom'

import * as S from './NavigateButton.style'

import type { INavigateProps } from './NavigateButton.type'

const NavigateButton: React.FC<INavigateProps> = ({
  img,
  description,
  url,
}) => {
  const navigate = useNavigate()
  const handleCategoryClick = () => {
    navigate(url)
  }
  return (
    <S.Navigate onClick={handleCategoryClick}>
      <S.Icon src={img} alt={description} />
      <span>{description}</span>
    </S.Navigate>
  )
}

export default NavigateButton
