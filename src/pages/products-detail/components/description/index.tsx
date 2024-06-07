import ex1 from '@/assets/products-detail/ex1.png'

import * as S from './Description.style'
const Description = () => {
  // 나중에 props로 추가 제품 설명 및 이미지? markdown으로 하면 수정해야함
  return (
    <S.DescriptionContainer>
      <S.DescriptionWrapper>
        <S.Title>도심 속 여유로움을 느껴보세요!</S.Title>
        <S.Description>
          2022년 새롭게 문을 연 ㅇㅇㅇ은 최신식 시설과 깔끔한 위생 상태를
          유지하고 있습니다! 12개의 프리미엄 코스를 가지고 있으며, 바쁜 도심
          속에서 여유로운 느낌을 느끼실 수 있습니다. 또한 프리미엄 패스 선택시
          ㅇㅇㅇ등을 서비스로 제공하고 있습니다.
        </S.Description>
      </S.DescriptionWrapper>
      <S.ImgWrapper>
        <S.DescriptionImg src={ex1} alt="상품 설명 이미지" />
        <S.DescriptionImg src={ex1} alt="상품 설명 이미지" />
      </S.ImgWrapper>
    </S.DescriptionContainer>
  )
}

export default Description
