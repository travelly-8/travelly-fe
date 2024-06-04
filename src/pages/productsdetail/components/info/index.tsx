import LocationIcon from '@/assets/productsdetail/location.svg'
import ShareIcon from '@/assets/productsdetail/share.svg'
import StarIcon from '@/assets/productsdetail/star.svg'
import { mockData3 } from '@/constants/MOCK_DATA'

import ImageCarousel from '@components/image-carousel'

import * as S from './Info.style'

const Info = () => {
  return (
    <S.InfoContainer>
      <S.CarouselContainer>
        <ImageCarousel images={mockData3} limit={5} />
      </S.CarouselContainer>
      <S.DescriptonContainer>
        <S.Label>
          <S.BlackTextL>상품명</S.BlackTextL>
          <img src={ShareIcon} alt="공유 버튼" />
        </S.Label>
        <S.SellingWrapper>
          <S.BlackTextM>판매 일정</S.BlackTextM>
          <S.BlueText>2024.00.00~00.00</S.BlueText>
        </S.SellingWrapper>
        <S.LocationWrapper>
          <S.Icon src={LocationIcon} alt="위치 아이콘" />
          <S.BlackTextS>서울시 ∙ 강남구</S.BlackTextS>
        </S.LocationWrapper>
        <S.LocationWrapper>
          <S.Icon src={StarIcon} alt="위치 아이콘" />
          <div>
            <S.BlackTextS>4.0(000)&nbsp;&nbsp;&nbsp;</S.BlackTextS>
            <S.GrayText>리뷰보기&gt;</S.GrayText>
          </div>
        </S.LocationWrapper>
      </S.DescriptonContainer>
    </S.InfoContainer>
  )
}

export default Info
