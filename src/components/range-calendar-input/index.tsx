import { useState } from 'react'

import { DAY_TO_STRING } from '@/constants/FILTERING_BROWSING.ts'

import { endOfDay, format, getDay, startOfDay } from 'date-fns'
import { Controller } from 'react-hook-form'

import * as S from './RangeCalendarInput.styles.tsx'

import type { dayType } from '@components/calendar-input/CalendarInput.type.ts'
import { ICalendarInput } from '@components/calendar-input/CalendarInput.type.ts'

import 'react-calendar/dist/Calendar.css'

const RangeCalendarInput = ({ formLabel, control }: ICalendarInput) => {
  const [value, setValue] = useState<[Date, Date] | undefined>(undefined)

  const formatDateRange = (range: [Date, Date] | undefined) => {
    if (!range) return ''
    const [start, end] = range
    return `${format(start, 'yyyy.MM.dd')} (${DAY_TO_STRING[getDay(start) as dayType]}) - ${format(end, 'yyyy.MM.dd')} (${DAY_TO_STRING[getDay(end) as dayType]})`
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.DateText>{formatDateRange(value)}</S.DateText>
        <Controller
          name={formLabel}
          control={control}
          defaultValue={value}
          render={({ field }) => (
            <S.StyleCalendar
              onChange={(range) => {
                field.onChange(range)
                setValue(range as [Date, Date])
              }}
              value={field.value}
              selectRange={true}
              tileClassName={({ date, view }) => {
                if (!value || view !== 'month') return null
                const [start, end] = value
                if (date >= startOfDay(start) && date <= endOfDay(end)) {
                  if (date.getTime() === startOfDay(start).getTime()) {
                    return 'react-calendar__tile--rangeStart'
                  }
                  if (date.getTime() === endOfDay(end).getTime()) {
                    return 'react-calendar__tile--rangeEnd'
                  }
                  return 'react-calendar__tile--range'
                }
                return null
              }}
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
            />
          )}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default RangeCalendarInput
