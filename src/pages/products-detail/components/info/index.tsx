import LocationIcon from '@/assets/products-detail/location.svg'
import ShareIcon from '@/assets/products-detail/share.svg'
import StarIcon from '@/assets/products-detail/star.svg'
import { mockData3 } from '@/constants/MOCK_DATA'

import ImageCarousel from '@components/image-carousel'

import * as S from './Info.style'

import type { IInfoProps } from './Info.type'

const Info: React.FC<IInfoProps> = ({
  productName,
  sellingDate,
  address,
  rating,
  reviewCnt,
  onShareClick,
}) => {
  const add = address.split(' ')
  return (
    <S.InfoContainer>
      <S.CarouselContainer>
        <ImageCarousel images={mockData3} limit={5} />
      </S.CarouselContainer>
      <S.DescriptionContainer>
        <S.Label>
          <S.BlackTextL>{productName}</S.BlackTextL>
          <img src={ShareIcon} alt="공유 버튼" onClick={onShareClick} />
        </S.Label>
        <S.SellingWrapper>
          <S.BlackTextM>판매 일정</S.BlackTextM>
          <S.BlueText>{sellingDate}</S.BlueText>
        </S.SellingWrapper>
        <S.LocationWrapper>
          <S.Icon src={LocationIcon} alt="위치 아이콘" />
          <S.BlackTextS>
            {add[0]} ∙ {add[1]}
          </S.BlackTextS>
        </S.LocationWrapper>
        <S.LocationWrapper>
          <S.Icon src={StarIcon} alt="위치 아이콘" />
          <div>
            <S.BlackTextS>
              {rating}({reviewCnt})&nbsp;&nbsp;&nbsp;
            </S.BlackTextS>
            <S.GrayText>리뷰보기&gt;</S.GrayText>
          </div>
        </S.LocationWrapper>
      </S.DescriptionContainer>
    </S.InfoContainer>
  )
}

export default Info
