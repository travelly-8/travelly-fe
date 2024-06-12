import LocationIcon from '@/assets/products-detail/location.svg'
import ShareIcon from '@/assets/products-detail/share.svg'
import StarIcon from '@/assets/products-detail/star.svg'
import { formatSellingDate, getFirstAndLastDates } from '@/utils/formatDate'

import ImageCarousel from '@components/image-carousel'

import * as S from './Info.style'

import type { IInfoProps } from './Info.type'

const Info: React.FC<IInfoProps> = ({
  productName,
  sellingDate,
  address,
  rating,
  reviewCnt,
  imageArray,
  onShareClick,
}) => {
  const { firstDate, lastDate } = getFirstAndLastDates(sellingDate)
  const formatDate = `${formatSellingDate(firstDate)}~${formatSellingDate(lastDate)}`
  const add = address.split(' ')
  return (
    <S.InfoContainer>
      <S.CarouselContainer>
        <ImageCarousel images={imageArray} />
      </S.CarouselContainer>
      <S.DescriptionContainer>
        <S.Label>
          <S.BlackTextL>{productName}</S.BlackTextL>
          <img src={ShareIcon} alt="공유 버튼" onClick={onShareClick} />
        </S.Label>
        <S.SellingWrapper>
          <S.BlackTextM>판매 일정</S.BlackTextM>
          <S.BlueText>{formatDate}</S.BlueText>
        </S.SellingWrapper>
        <S.LocationWrapper>
          <S.Icon src={LocationIcon} alt="위치 아이콘" />
          <S.BlackTextS>
            {add[0]} ∙ {add[1]}
          </S.BlackTextS>
        </S.LocationWrapper>
        <S.LocationWrapper>
          <S.Icon src={StarIcon} alt="위치 아이콘" />
          <S.Review>
            <S.BlackTextS>{`${rating} (${reviewCnt})`}</S.BlackTextS>
            <S.GrayText>리뷰보기&gt;</S.GrayText>
          </S.Review>
        </S.LocationWrapper>
      </S.DescriptionContainer>
    </S.InfoContainer>
  )
}

export default Info
