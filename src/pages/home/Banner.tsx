import React, { useRef, useState } from 'react'

import bannerPicnic from '@/assets/home/banner-picnic.png'
import bannerSky from '@/assets/home/banner-sky.png'
import leftArrow from '@/assets/home/left-arrow.svg'
import rightArrow from '@/assets/home/right-arrow.svg'

import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    display: none;
  }
`

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`

const Slide = styled.div``

const SlideImage = styled.img`
  width: 100%;
  height: 15.4rem;
  object-fit: cover;
`

const CustomIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  background-color: var(--color-black);
  opacity: 0.8;
  color: var(--color-white);
  padding: 0.4rem 0.6rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ArrowButton = styled.img`
  cursor: pointer;
  margin: 0 0.3rem;
  width: 0.6rem;
  height: 1rem;
`

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  }

  const images = [bannerSky, bannerPicnic]

  return (
    <SliderContainer>
      <StyledSlider ref={sliderRef} {...settings}>
        {images.map((imageUrl, index) => (
          <Slide key={index}>
            <SlideImage src={imageUrl} alt={`banner ${index}`} />
          </Slide>
        ))}
      </StyledSlider>
      <CustomIndicator>
        <ArrowButton
          src={leftArrow}
          alt="Previous"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        {`${currentSlide + 1} / ${images.length}`}
        <ArrowButton
          src={rightArrow}
          alt="Next"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </CustomIndicator>
    </SliderContainer>
  )
}

export default Banner
