import refreshIcon from '@/assets/home/refresh.svg'

import CalendarInput from '@components/calendar-input'
import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useForm } from 'react-hook-form'

import * as S from './CalendarSheet.styles.tsx'

const CalendarSheet = () => {
  const { control, watch, reset } = useForm()

  return (
    <GrabSheet name="calendar-sheet" align="center">
      <CalendarInput control={control} formLabel="date" />
      <S.Buttons>
        <S.RefreshButton onClick={reset}>
          <S.Icon src={refreshIcon} /> 초기화
        </S.RefreshButton>
        <RoundButton.Primary>날짜 선택</RoundButton.Primary>
      </S.Buttons>
    </GrabSheet>
  )
}

export default CalendarSheet
