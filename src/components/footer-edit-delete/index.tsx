import { deleteProduct } from '@/api/productsAPI'
import DeleteIcon from '@/assets/common/delete.svg'

import RoundButton from '@components/round-button'
import { useNavigate } from 'react-router-dom'

import * as S from './FooterEditDelete.style'

const FooterEditDelete = ({
  price,
  productId,
}: {
  price: number
  productId: number
}) => {
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteProduct(productId)
      .then(() => {
        alert('상품이 삭제되었습니다!')
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <S.FooterContainer>
      <S.Wrapper>
        <img src={DeleteIcon} alt="상품 삭제" onClick={handleDelete} />
        <S.RightSection $buttontype="reservation">
          <S.Text>
            <S.PriceText>{price?.toLocaleString('ko-KR')} 포인트</S.PriceText>
          </S.Text>
          {/* TODO: 수정하기 링크 연결 */}
          <RoundButton.Gray>수정하기</RoundButton.Gray>
        </S.RightSection>
      </S.Wrapper>
    </S.FooterContainer>
  )
}

export default FooterEditDelete
