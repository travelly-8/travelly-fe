import { useState } from 'react'

import refreshIcon from '@/assets/home/refresh.svg'
import { LOCALE_CODE_LIST } from '@/constants/FILTERING_BROWSING.ts'
import { sheet } from '@/store/sheet-slice.ts'

import CalendarInput from '@components/calendar-input'
import FoldableMenu from '@components/foldable-menu'
import RangeSlider from '@components/range-slider'
import RoundButton from '@components/round-button'
import SheetHeader from '@components/sheet-header'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './FilteringSheet.styles.tsx'

const FilteringSheet = () => {
  const [selectedLocale, setSelectedLocale] = useState('0')
  const { control, watch, reset } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const input = queryParams.get('input')
  const type = queryParams.get('type')

  const minPriceValue = watch('min-price') || 0
  const maxPriceValue = watch('max-price') || 100000
  const startTimeValue = watch('start-time') || 0
  const endTimeValue = watch('end-time') || 23
  const dateValue = watch('date') || new Date()

  function handleSubmit() {
    if (input) {
      navigate(
        `/products?input=${input}&minPrice=${minPriceValue}&maxPrice=${maxPriceValue}&startTime=${startTimeValue}&endTime=${endTimeValue}&date=${format(dateValue, 'yyyy-MM-dd')}&city=${selectedLocale}`,
      )
    }
    if (type) {
      navigate(
        `/products?type=${type}&minPrice=${minPriceValue}&maxPrice=${maxPriceValue}&startTime=${startTimeValue}&endTime=${endTimeValue}&date=${format(dateValue, 'yyyy-MM-dd')}&city=${selectedLocale}`,
      )
    }
    dispatch(sheet({ name: 'filter-sheet', status: false }))
  }

  return (
    <>
      <SheetHeader>
        <S.HeaderTitle>필터</S.HeaderTitle>
      </SheetHeader>
      <S.Content>
        <FoldableMenu attribute="가격대">
          <RangeSlider
            initMin={minPriceValue}
            initMax={maxPriceValue}
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
            initMin={startTimeValue}
            initMax={endTimeValue}
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
            {Object.entries(LOCALE_CODE_LIST).map(
              ([localeCode, localeName]) => (
                <RoundButton.Gray
                  key={localeCode}
                  size="small"
                  selected={selectedLocale === localeCode}
                  onClick={() => setSelectedLocale(localeCode)}
                >
                  {localeName}
                </RoundButton.Gray>
              ),
            )}
          </S.LocaleList>
        </FoldableMenu>
        <S.Buttons>
          <S.RefreshButton
            onClick={() => {
              reset()
              setSelectedLocale('0')
            }}
          >
            <S.Icon src={refreshIcon} /> 초기화
          </S.RefreshButton>
          <RoundButton.Primary onClick={handleSubmit}>
            필터 적용
          </RoundButton.Primary>
        </S.Buttons>
      </S.Content>
    </>
  )
}

export default FilteringSheet
