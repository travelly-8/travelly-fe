import refreshIcon from '@/assets/home/refresh.svg'

import CalendarInput from '@components/calendar-input'
import FoldableMenu from '@components/foldable-menu'
import RangeSlider from '@components/range-slider'
import RoundButton from '@components/round-button'
import SheetHeader from '@components/sheet-header'

import * as S from './FilteringSheet.styles.tsx'

const FilteringSheet = () => {
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
          <input placeholder="가격을 선택하시오" />
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
