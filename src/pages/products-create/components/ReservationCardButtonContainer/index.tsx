import RectangleButton from '@components/rectangle-button'
import * as S from './ReservationCardButtonContainer.style'

const ReservationCardButtonContainer = () => {
  return (
    <S.ButtonWrapper>
      <RectangleButton size={'small'} color={'disabled'}>
        거절하기
      </RectangleButton>
      <RectangleButton size={'small'}>수락하기</RectangleButton>
    </S.ButtonWrapper>
  )
}

export default ReservationCardButtonContainer
