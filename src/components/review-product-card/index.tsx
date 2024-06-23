import { getReviewDetail } from '@/api/reviewAPI'
import ArrowRight from '@/assets/common/arrow-right.svg'
import defaultImage from '@/assets/login/airplane.png'
import { API_REVIEW } from '@/constants/API'
import useGetReviewDetail from '@/hooks/api/reviewAPI/useGetReviewDetail'

import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'

import * as S from './ReviewProductCard.style'
import { IReviewProductCardProps } from './ReviewProductCard.type'

const ReviewProductCard: React.FC<IReviewProductCardProps> = ({
  productDetail,
  isCommentMode,
}) => {
  const { productId, reviewId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { data } = useGetReviewDetail(
    productId && reviewId
      ? API_REVIEW.REVIEW_DETAIL(+productId, +reviewId)
      : '',
    () =>
      productId && reviewId
        ? getReviewDetail(Number(productId), Number(reviewId))
        : Promise.reject('Invalid IDs'),
  )

  const {
    id,
    productName,
    name,
    createdDate,
    images = defaultImage,
    reviewerName,
    totalPrice,
    ticketDto,
  } = productDetail
  const price =
    ticketDto?.[0]?.price || totalPrice
      ? ticketDto?.[0]?.price || totalPrice
      : '가격 정보 없음'

  const handleArrowClick = () => {
    navigate(`/products/${data?.productId || id}`)
  }
  const isReservation =
    matchPath('/reservation/:productId', location.pathname) !== null
  const reviewDate = isReservation
    ? createdDate
    : new Date(createdDate).toLocaleDateString()

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={images[0]?.url} alt="상품 이미지" />
        <S.DetailWrapper>
          <S.ProductName>{name}</S.ProductName>
          <S.PriceAndDateWrapper>
            <S.Price>
              작성자 : {data?.reviewUserNickname || reviewerName}
            </S.Price>
            <S.Bar>|</S.Bar>
            <S.Date>작성일 : {reviewDate || createdDate}</S.Date>
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
