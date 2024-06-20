import * as S from '@/pages/products-detail/ProductsDetail.style'

interface ILoadMoreButtonProps {
  onClick: () => void
  remainingReviews: number
}

const LoadMoreButton: React.FC<ILoadMoreButtonProps> = ({
  onClick,
  remainingReviews,
}) => {
  return (
    <S.ButtonWrapper>
      <S.LoadMoreButton onClick={onClick}>
        {remainingReviews}개 리뷰 더보기
      </S.LoadMoreButton>
    </S.ButtonWrapper>
  )
}

export default LoadMoreButton
