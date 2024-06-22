import { sheet } from '@/store/sheet-slice/sheet-slice.ts'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './NavigateButton.style'

import type { INavigateProps } from './NavigateButton.type'

const NavigateButton: React.FC<INavigateProps> = ({
  img,
  description,
  url,
  isButtonActive,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCategoryClick = () => {
    navigate(url)
    dispatch(
      sheet({
        name: 'category-sheet',
        status: false,
        text: '',
      }),
    )
  }

  return (
    <S.Navigate onClick={handleCategoryClick} $isActive={isButtonActive}>
      <S.Icon src={img} alt={description} $isActive={isButtonActive} />
      <span>{description}</span>
    </S.Navigate>
  )
}

export default NavigateButton
