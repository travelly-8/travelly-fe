import ArrowRight from '@/assets/common/arrow-right-lightgray.svg'
import { getDateArray } from '@/utils/formatDate'

import { format } from 'date-fns'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'

import * as S from './ReviewProductCard.style'
import { IReviewProductCardProps } from './ReviewProductCard.type'

const ReviewProductCard: React.FC<IReviewProductCardProps> = ({
  reviewData,
  productDetail,
  isCommentMode,
  isReviewList,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { productId, name, images, operationDays, ticketDto } =
    productDetail || {}

  const price = ticketDto[0]?.price

  const { firstDate, lastDate } = getDateArray(operationDays)
  const formatDate =
    firstDate && lastDate
      ? `${format(lastDate, 'yyyy.MM.dd')}~${format(firstDate, 'yyyy.MM.dd')}`
      : 'N/A'

  const handleArrowClick = () => {
    navigate(`/products/${productId}`)
  }

  const isReservation =
    matchPath('/reservation/:productId', location.pathname) !== null

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={images[0]?.url} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{name}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>
              {!isReviewList
                ? `${price?.toLocaleString('ko-KR') || '가격 정보 없음'}원`
                : `작성자: ${reviewData?.reviewUserNickname}`}
            </S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>
              {!isReviewList
                ? `${formatDate}`
                : `작성일: ${reviewData?.reviewDate}`}
            </S.Date>
          </S.PriceAndDateWrapper>
        </S.DetailWrapper>
      </S.ContentWrapper>
      {isCommentMode ? (
        <S.CommentCount>1</S.CommentCount>
      ) : (
        <S.Arrow
          src={ArrowRight}
          alt="상세 페이지"
          onClick={handleArrowClick}
        />
      )}
    </S.Wrapper>
  )
}

export default ReviewProductCard
