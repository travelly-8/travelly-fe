import ArrowRight from '@/assets/common/arrow-right.svg'
import Img from '@/assets/mypage/comunity.png' // TODO: 상품 상세 연결하고나면 삭제

import * as S from './ReviewProductCard.style'

interface ReviewProductCardProps {
  isCommentMode?: boolean
}

const ReviewProductCard: React.FC<ReviewProductCardProps> = ({
  isCommentMode,
}) => {
  // TODO: 상품 상세 페이지에서 데이터 받아오기
  // TODO: 화살표 클릭 시, 상품 상세 페이지로 이동

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={Img} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>상품명</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>000,000원</S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>24.00.00-24.00.00</S.Date>
          </S.PriceAndDateWrapper>
        </S.DetailWrapper>
      </S.ContentWrapper>
      {isCommentMode ? (
        <S.CommentCount>1</S.CommentCount>
      ) : (
        <S.Arrow src={ArrowRight} alt="상세 페이지" />
      )}
    </S.Wrapper>
  )
}

export default ReviewProductCard
