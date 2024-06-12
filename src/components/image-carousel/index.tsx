import { useState } from 'react'

import nextIcon from '@/assets/home/next.svg'
import previousIcon from '@/assets/home/previous.svg'
import defaultImage from '@/assets/login/airplane.png'

import * as S from './ImageCarousel.styles.tsx'

import type { IImageCarousel } from './ImageCarousel.type.ts'

const ImageCarousel = ({ images = [defaultImage] }: IImageCarousel) => {
  const limit = images.length
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + limit) % limit)
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % limit)
  }

  return (
    <S.Wrapper>
      <S.ImageContainer
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, idx) => (
          <S.Image key={idx} src={image} alt={`상품 이미지 ${idx}`} />
        ))}
      </S.ImageContainer>
      <S.NavigationButton onClick={handlePrevClick}>
        <img src={previousIcon} alt="이전 이미지" />
      </S.NavigationButton>
      <S.NavigationButton onClick={handleNextClick}>
        <img src={nextIcon} alt="다음 이미지" />
      </S.NavigationButton>
      <S.Index>
        {currentIndex + 1} / {limit}
      </S.Index>
    </S.Wrapper>
  )
}

export default ImageCarousel
