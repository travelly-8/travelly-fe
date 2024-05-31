import arrowIcon from '@/assets/common/arrow-right.svg'

import * as S from './HorizontalMenu.style'
interface IHorizonalMenu {
  icon: string
  text: string
  onClick: () => void
}

const HorizontalMenu = ({ icon, text, onClick }: IHorizonalMenu) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.IconTextWrapper>
        <S.Icon src={icon} alt={text} />
        <S.Text>{text}</S.Text>
      </S.IconTextWrapper>
      <S.Arrow src={arrowIcon} alt="이동" />
    </S.Wrapper>
  )
}

export default HorizontalMenu
