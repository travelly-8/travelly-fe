import React, { useEffect, useRef, useState } from 'react'

import * as S from './RangeSlider.styles.tsx'

import { IRangeSlider } from '@components/range-slider/RangeSlider.type.ts'

export default function RangeSlider({
  initMax,
  initMin,
  min,
  max,
  step,
  priceCap,
  measure,
}: IRangeSlider) {
  const [minValue, setMinValue] = useState(initMin)
  const [maxValue, setMaxValue] = useState(initMax)
  const progressRef = useRef<HTMLDivElement>(null)

  // Range Handler
  const handleMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= maxValue - priceCap) {
      setMinValue(Number(event.target.value))
    }
  }

  // Range Handler
  const handleMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) >= minValue + priceCap) {
      setMaxValue(Number(event.target.value))
    }
  }

  useEffect(() => {
    //? [aria-label="progress"]의 width를 조절하는 방식으로 progress bar를 구현
    if (!progressRef.current) return
    progressRef.current.style.left = (minValue / max) * step + '%'
    progressRef.current.style.right = step - (maxValue / max) * step + '%'
  }, [minValue, maxValue, max, step])

  return (
    <S.Wrapper>
      <S.Content>
        <S.Label>
          {minValue}
          {measure} ~ {maxValue}
          {measure}
        </S.Label>

        <div>
          <S.Slider aria-label="slider">
            <S.Progress aria-label="progress" ref={progressRef} />
          </S.Slider>
          <S.RangeInput aria-label="range-input">
            <S.MinInput
              aria-label="min-price"
              type="range"
              min={min}
              step={step}
              max={max}
              value={minValue}
              onChange={handleMinRange}
            />
            <S.MinInput
              aria-label="max-price"
              type="range"
              min={min}
              step={step}
              max={max}
              value={maxValue}
              onChange={handleMaxRange}
            />
          </S.RangeInput>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}
