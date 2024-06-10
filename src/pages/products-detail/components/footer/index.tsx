import { useState } from 'react'

import RoundButton from '@components/round-button'

import * as S from './Footer.style'

import type { IFooter } from './Footer.type'

const Footer = ({
  isBookmarked: initialBookmarked,
  isReservationProduct,
  discount,
  price,
  url,
}: IFooter) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked)

  const goUrl = () => {
    url && window.open(url)
  }

  return (
    <S.Wrapper>
      <S.FooterBookmarkButton
        isBookmarked={isBookmarked}
        onClick={() => {
          setIsBookmarked((prev) => !prev)
        }}
      />
      <S.RightSection>
        {isReservationProduct && (
          <S.Text>
            <S.DiscountText>{discount}%</S.DiscountText>
            <S.PriceText>{price?.toLocaleString('ko-KR')}원</S.PriceText>
          </S.Text>
        )}

        {isReservationProduct ? (
          <RoundButton.Primary>예약하기</RoundButton.Primary>
        ) : (
          <RoundButton.Primary onClick={goUrl} disabled={!url}>
            홈페이지
          </RoundButton.Primary>
        )}
      </S.RightSection>
    </S.Wrapper>
  )
}

export default Footer
