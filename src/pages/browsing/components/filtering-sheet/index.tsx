import refreshIcon from '@/assets/browsing/refresh.svg'

import CalendarInput from '@components/calendar-input'
import FoldableMenu from '@components/foldable-menu'
import RangeSlider from '@components/range-slider'
import RoundButton from '@components/round-button'
import SheetHeader from '@components/sheet-header'

import { LOCALE_LIST } from '@/constants/FILTERING_BROWSING.ts'
import { useState } from 'react'
import * as S from './FilteringSheet.styles.tsx'

const FilteringSheet = () => {
  const [selectedLocale, setSelectedLocale] = useState(0)
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
          />
        </FoldableMenu>
        <FoldableMenu attribute="날짜">
          <CalendarInput />
        </FoldableMenu>
        <FoldableMenu attribute="지역">
          <S.LocaleList>
            {LOCALE_LIST.map((locale, idx) => (
              <RoundButton.Gray
                size={'small'}
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
