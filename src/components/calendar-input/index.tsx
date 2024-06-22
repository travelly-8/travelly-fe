import { useEffect, useState } from 'react'

import { DAY_TO_STRING } from '@/constants/FILTERING_BROWSING.ts'

import { format, getDay, isSameDay } from 'date-fns'
import { Controller } from 'react-hook-form'

import * as S from './CalendarInput.styles.tsx'

import type { dayType } from '@components/calendar-input/CalendarInput.type.ts'
import { ICalendarInput } from '@components/calendar-input/CalendarInput.type.ts'

import 'react-calendar/dist/Calendar.css'

type CalendarViewType = 'month' | 'year' | 'decade' | 'century'

const CalendarInput = ({
  formLabel,
  control,
  calendarType = 'singleDate',
  operationDays = [],
  validReservationDate,
}: ICalendarInput) => {
  const [value, onChange] = useState(new Date())
  const [rangdeDate, setRangeDate] = useState([new Date(), new Date()])

  const DISPLAY_MAP = {
    singleDate: `${format(value, 'yyyy.MM.dd')} (${DAY_TO_STRING[getDay(value) as dayType]})`,
    rangeDate: `${format(rangdeDate[0], 'yyyy.MM.dd')} (${DAY_TO_STRING[getDay(rangdeDate[0]) as dayType]})~${format(rangdeDate[1], 'yyyy.MM.dd')} (${DAY_TO_STRING[getDay(rangdeDate[1]) as dayType]})`,
  }
  const isOperationDay = (date: Date) => {
    return operationDays.some((day) => isSameDay(new Date(day.date), date))
  }
  const getTileClassName = ({
    date,
    view,
  }: {
    date: Date
    view: CalendarViewType
  }) => {
    if (view === 'month' && isOperationDay(date)) {
      return 'operation-day'
    }
    return ''
  }
  useEffect(() => {
    if (!validReservationDate) return
    validReservationDate(isOperationDay(new Date(value)))
  }, [value, validReservationDate])
  return (
    <S.Wrapper>
      <S.Content>
        <S.DateText>{DISPLAY_MAP[calendarType]}</S.DateText>
        <Controller
          name={formLabel}
          control={control}
          defaultValue={value}
          render={({ field }) => (
            <S.StyleCalendar
              onChange={(e) => {
                field.onChange(e)
                calendarType === 'singleDate'
                  ? onChange(e as Date)
                  : setRangeDate(e as Date[])
              }}
              value={field.value}
              formatMonthYear={(_locale: undefined | string, value: Date) =>
                format(value, 'yyyy년 MM월')
              }
              formatDay={(_locale: undefined | string, value: Date) =>
                format(value, 'd')
              }
              calendarType="gregory"
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
              selectRange={calendarType === 'rangeDate'}
              tileClassName={({ date, view }) =>
                getTileClassName({ date, view })
              }
            />
          )}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default CalendarInput
