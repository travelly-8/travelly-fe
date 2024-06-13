import { useState } from 'react'

import RoundButton from '@components/round-button'
import { useNavigate } from 'react-router-dom'

import * as S from './FooterReservation.style'
import { IFooter } from './FooterReservation.type'

const buttonText = {
  reservation: '예약하기',
  payment: '결제하기',
  cancelPayment: '결제 취소',
} as const

const FooterReservation = ({
  isBookmarked: initialBookmarked,
  isReservationProduct,
  discount,
  price,
  buttontype,
  productId,
  onPayConfirmClick,
  onPayCancelClick,
}: IFooter) => {
  const navigate = useNavigate()
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked)

  const handleButtonClick = () => {
    if (buttontype === 'reservation') {
      navigate(`/reservation/${productId}`)
    } else if (buttontype === 'payment' && onPayConfirmClick) {
      onPayConfirmClick()
    } else if (buttontype === 'cancelPayment' && onPayCancelClick) {
      onPayCancelClick()
    }
  }

  return (
    <S.FooterContainer>
      <S.Wrapper>
        {buttontype === 'reservation' && (
          <S.FooterBookmarkButton
            isBookmarked={isBookmarked}
            onClick={() => {
              setIsBookmarked((prev) => !prev)
            }}
            position="static"
          />
        )}
        <S.RightSection $buttontype={buttontype}>
          {isReservationProduct && (
            <S.Text>
              <S.DiscountText>{discount}%</S.DiscountText>
              <S.PriceText>{price?.toLocaleString('ko-KR')}원</S.PriceText>
            </S.Text>
          )}
          <RoundButton.Primary onClick={handleButtonClick}>
            {buttonText[buttontype]}
          </RoundButton.Primary>
        </S.RightSection>
      </S.Wrapper>
    </S.FooterContainer>
  )
}

export default FooterReservation
