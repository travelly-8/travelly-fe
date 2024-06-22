import ex1 from '@/assets/products-detail/ex1.png'

import * as S from './Description.style'
import { DescriptionProps } from './Description.type'

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <S.DescriptionContainer>
      <S.DescriptionWrapper>
        <S.Title />
        <S.Description>{description}</S.Description>
      </S.DescriptionWrapper>
      <S.ImgWrapper>
        <S.DescriptionImg src={ex1} alt="상품 설명 이미지" />
      </S.ImgWrapper>
    </S.DescriptionContainer>
  )
}

export default Description
