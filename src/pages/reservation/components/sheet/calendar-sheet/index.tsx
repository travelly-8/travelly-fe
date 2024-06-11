import refreshIcon from '@/assets/home/refresh.svg'

import GrabSheet from '@components/grab-sheet'
import RangeCalendarInput from '@components/range-calendar-input'
import RoundButton from '@components/round-button'
import { useForm } from 'react-hook-form'

import * as S from './CalendarSheet.styles.tsx'

const CalendarSheet = () => {
  const { control, watch, reset } = useForm()

  return (
    <div>
      <GrabSheet name="calendar-sheet" align="center">
        <RangeCalendarInput formLabel="form" control={control} />
        <S.Buttons>
          <S.RefreshButton>
            <S.Icon src={refreshIcon} /> 초기화
          </S.RefreshButton>
          <RoundButton.Primary>필터 적용</RoundButton.Primary>
        </S.Buttons>
      </GrabSheet>
    </div>
  )
}

export default CalendarSheet
