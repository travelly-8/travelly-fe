import React, { useEffect, useRef, useState } from 'react'

import { Controller } from 'react-hook-form'

import * as S from './RangeSlider.styles.tsx'

import { IRangeSlider } from '@components/range-slider/RangeSlider.type.ts'

export default function RangeSlider({
  initMax,
  initMin,
  min,
  max,
  step,
  minGap,
  measure,
  minLabel,
  maxLabel,
  control,
}: IRangeSlider) {
  const [minValue, setMinValue] = useState(initMin)
  const [maxValue, setMaxValue] = useState(initMax)
  const progressRef = useRef<HTMLDivElement>(null)

  // Range Handler
  const handleMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= maxValue - minGap) {
      setMinValue(Number(event.target.value))
    }
  }

  // Range Handler
  const handleMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) >= minValue + minGap) {
      setMaxValue(Number(event.target.value))
    }
  }

  useEffect(() => {
    //? [aria-label="progress"]의 width를 조절하는 방식으로 progress bar를 구현
    if (!progressRef.current) return
    progressRef.current.style.left = (minValue / max) * 100 + '%'
    progressRef.current.style.right = 100 - (maxValue / max) * 100 + '%'
  }, [minValue, maxValue, max])

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
            <Controller
              name={minLabel}
              control={control}
              defaultValue={initMin}
              render={({ field }) => (
                <S.MinInput
                  type="range"
                  min={min}
                  step={step}
                  max={max}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e)
                    handleMinRange(e)
                  }}
                />
              )}
            />
            <Controller
              name={maxLabel}
              control={control}
              defaultValue={initMax}
              render={({ field }) => (
                <S.MinInput
                  type="range"
                  min={min}
                  step={step}
                  max={max}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e)
                    handleMaxRange(e)
                  }}
                />
              )}
            />
          </S.RangeInput>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}
