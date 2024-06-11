import refreshIcon from '@/assets/home/refresh.svg'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'

import CalendarInput from '@components/calendar-input'
import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import * as S from './CalendarSheet.styles.tsx'

const CalendarSheet = () => {
  const dispatch = useDispatch()
  const { control, reset } = useForm()
  const handleConfirm = () => {
    dispatch(sheet({ name: 'pay-confirm', status: false }))
  }

  return (
    <GrabSheet name="pick-date" align="center">
      <CalendarInput control={control} formLabel="date" />
      <S.Buttons>
        <S.RefreshButton onClick={reset}>
          <S.Icon src={refreshIcon} /> 초기화
        </S.RefreshButton>
        <RoundButton.Primary onClick={handleConfirm}>
          날짜 선택
        </RoundButton.Primary>
      </S.Buttons>
    </GrabSheet>
  )
}

export default CalendarSheet
