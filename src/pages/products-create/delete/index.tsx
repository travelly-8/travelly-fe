import shoppingCart from '@/assets/products-create/shoppingCart.svg'
import PageHeader from '@components/page-header'
import RectangleButton from '@components/rectangle-button'
import { useNavigate } from 'react-router-dom'
import * as S from './ProductDelete.style'

const ProductDelete = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <S.Wrapper>
      <PageHeader>
        <S.Title>상품 삭제</S.Title>
      </PageHeader>
      <S.Content>
        <S.Img src={shoppingCart} alt="Shopping Cart" />
        <S.WarningText>상품 삭제시 복구가 불가능 합니다.</S.WarningText>
        <S.SubText>정말 삭제 하시겠습니까?</S.SubText>
      </S.Content>
      <S.ButtonWrapper>
        <RectangleButton>삭제하기</RectangleButton>
        <S.BackButton onClick={handleBackClick}>&lt; 돌아가기</S.BackButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProductDelete
