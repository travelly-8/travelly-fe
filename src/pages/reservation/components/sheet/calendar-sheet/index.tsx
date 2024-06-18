import refreshIcon from '@/assets/home/refresh.svg'
import { IReservationInputState } from '@/pages/reservation/components/reservation-input/Reservation.type.ts'
import { sheet } from '@/store/sheet-slice/sheet-slice.ts'

import CalendarInput from '@components/calendar-input'
import GrabSheet from '@components/grab-sheet'
import RoundButton from '@components/round-button'
import { Control, UseFormReset } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import * as S from './CalendarSheet.styles.tsx'

export interface ICalendarSheet {
  control: Control<IReservationInputState>
  reset: UseFormReset<IReservationInputState>
  operationDays: IOperationDays[]
}

interface IOperationDays {
  date: string
  operationsDayHours: IOperationDayHours[]
}
interface IOperationDayHours {
  startTime: string
  endTime: string
}

const CalendarSheet = ({ control, reset, operationDays }: ICalendarSheet) => {
  const dispatch = useDispatch()

  return (
    <GrabSheet name="calendar-sheet" align="center">
      <CalendarInput
        control={control}
        formLabel="date"
        operationDays={operationDays}
      />
      <S.Buttons>
        <S.ExampleWrapper>
          <S.Example $color="var(--color-green)" />
          <span>예약 가능 일</span>
        </S.ExampleWrapper>
        <S.ExampleWrapper>
          <S.Example $color="var(--color-main)" />
          <span>선택일</span>
        </S.ExampleWrapper>
        <S.RefreshButton onClick={() => reset()}>
          <S.Icon src={refreshIcon} /> 초기화
        </S.RefreshButton>
        <RoundButton.Primary
          onClick={() =>
            dispatch(sheet({ name: 'calendar-sheet', status: false }))
          }
        >
          날짜 선택
        </RoundButton.Primary>
      </S.Buttons>
    </GrabSheet>
  )
}

export default CalendarSheet
