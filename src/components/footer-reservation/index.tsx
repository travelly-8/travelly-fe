import { useState } from 'react'

import { getAccessToken } from '@/utils/tokenStorage'

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
  onSubmit,
}: IFooter) => {
  const navigate = useNavigate()
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked)
  const accessToken = getAccessToken()

  const handleButtonClick = () => {
    if (buttontype === 'reservation' && accessToken) {
      navigate(`/reservation/${productId}`)
    } else if (buttontype === 'reservation' && !accessToken) {
      navigate('/login')
    } else if (buttontype === 'payment' && onPayConfirmClick && onSubmit) {
      onSubmit()
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
              <S.PriceText>{price?.toLocaleString('ko-KR')} 포인트</S.PriceText>
            </S.Text>
          )}
          {accessToken ? (
            <RoundButton.Primary onClick={handleButtonClick}>
              {buttonText[buttontype]}
            </RoundButton.Primary>
          ) : (
            <RoundButton.Gray onClick={handleButtonClick}>
              {buttonText[buttontype]}
            </RoundButton.Gray> // 로그인 x시 회색 버튼
          )}
        </S.RightSection>
      </S.Wrapper>
    </S.FooterContainer>
  )
}

export default FooterReservation
