import { useNavigate } from 'react-router-dom'
import * as S from './NavigateButton.style'
import type { INavigateProps } from './NavigateButton.type'

const NavigatetButton: React.FC<INavigateProps> = ({
  img,
  description,
  type,
}) => {
  const navigate = useNavigate()
  const handleCategoryClick = () => {
    navigate(`/result?type=${type}`)
  }
  return (
    <S.Navigate onClick={handleCategoryClick}>
      <S.Icon src={img} alt={description} />
      <span>{description}</span>
    </S.Navigate>
  )
}

export default NavigatetButton
