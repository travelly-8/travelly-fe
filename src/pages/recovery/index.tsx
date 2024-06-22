import BackBar from '@components/back-bar'
import RectangleButton from '@components/rectangle-button'
import * as S from './Recovery.style'

const Recovery = () => {
  return (
    <S.Wrapper>
      <BackBar />
      <S.Title>이메일・비밀번호 조회</S.Title>
      <S.ButtonWrapper>
        <RectangleButton size="large">이메일 찾기</RectangleButton>
        <RectangleButton size="large" color="disabled">
          비밀번호 찾기
        </RectangleButton>
      </S.ButtonWrapper>
      <S.BackButton>&lt; 이메일로 로그인</S.BackButton>
    </S.Wrapper>
  )
}

export default Recovery
