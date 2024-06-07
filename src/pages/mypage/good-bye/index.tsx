import bag from '@/assets/signup/bag.png'

import RectangleButton from '@components/rectangle-button'
import { useNavigate } from 'react-router-dom'

import * as S from './GoodbyPage.style'

export default function GoodbyePage() {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Icon src={bag} alt="회원가입 완료" />
      <S.TextWrapper>
        <S.UpperText>안녕히가세요!</S.UpperText>
        <S.LowerText>다음에 또 만나길 기다리고 있을게요.</S.LowerText>
      </S.TextWrapper>
      <RectangleButton onClick={() => navigate('/')}>처음으로</RectangleButton>
    </S.Wrapper>
  )
}
