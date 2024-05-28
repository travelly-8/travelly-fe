import { useEffect, useState } from 'react'

import refreshIcon from '@/assets/home/refresh.svg'
import { LOCALE_LIST } from '@/constants/FILTERING_BROWSING.ts'

import CalendarInput from '@components/calendar-input'
import FoldableMenu from '@components/foldable-menu'
import RangeSlider from '@components/range-slider'
import RoundButton from '@components/round-button'
import SheetHeader from '@components/sheet-header'
import { useForm } from 'react-hook-form'

import * as S from './FilteringSheet.styles.tsx'

const FilteringSheet = () => {
  const [selectedLocale, setSelectedLocale] = useState(0)
  const { control, watch } = useForm()

  const minPriceValue = watch('min-price')
  const maxPriceValue = watch('max-price')
  const startTimeValue = watch('start-time')
  const endTimeValue = watch('end-time')
  const dateValue = watch('date')

  useEffect(() => {}, [
    minPriceValue,
    maxPriceValue,
    dateValue,
    startTimeValue,
    endTimeValue,
  ])
  return (
    <>
      <SheetHeader>
        <S.HeaderTitle>필터</S.HeaderTitle>
      </SheetHeader>
      <S.Content>
        <FoldableMenu attribute="가격대">
          <RangeSlider
            initMin={50000}
            initMax={100000}
            min={0}
            max={300000}
            step={1000}
            minGap={1000}
            measure="원"
            minLabel="min-price"
            maxLabel="max-price"
            control={control}
          />
        </FoldableMenu>
        <FoldableMenu attribute="시간대">
          <RangeSlider
            initMin={11}
            initMax={17}
            min={0}
            max={24}
            step={1}
            minGap={1}
            measure="시"
            minLabel="start-time"
            maxLabel="end-time"
            control={control}
          />
        </FoldableMenu>
        <FoldableMenu attribute="날짜">
          <CalendarInput formLabel="date" control={control} />
        </FoldableMenu>
        <FoldableMenu attribute="지역">
          <S.LocaleList>
            {LOCALE_LIST.map((locale, idx) => (
              <RoundButton.Gray
                key={locale}
                size="small"
                selected={selectedLocale === idx}
                onClick={() => setSelectedLocale(idx)}
              >
                {locale}
              </RoundButton.Gray>
            ))}
          </S.LocaleList>
        </FoldableMenu>
        <S.Buttons>
          <S.RefreshButton>
            <S.Icon src={refreshIcon} /> 초기화
          </S.RefreshButton>
          <RoundButton.Primary>필터 적용</RoundButton.Primary>
        </S.Buttons>
      </S.Content>
    </>
  )
}

export default FilteringSheet
