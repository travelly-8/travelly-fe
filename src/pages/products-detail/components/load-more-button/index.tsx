import * as S from '@/pages/products-detail/ProductsDetail.style'

interface ILoadMoreButtonProps {
  onClick: () => void
}

const LoadMoreButton: React.FC<ILoadMoreButtonProps> = ({ onClick }) => {
  return (
    <S.ButtonWrapper>
      <S.LoadMoreButton onClick={onClick}>{3}개 리뷰 더보기</S.LoadMoreButton>
    </S.ButtonWrapper>
  )
}

export default LoadMoreButton
