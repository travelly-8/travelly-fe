import BannerSky from '@/assets/home/banner-sky.png'

import * as S from './HomePage.style'

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerImage src={BannerSky} />
    </S.BannerWrapper>
  )
}

export default Banner
