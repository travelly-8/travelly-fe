import { useState } from 'react'

import { DAY_TO_STRING } from '@/constants/FILTERING_BROWSING.ts'

import { format, getDay } from 'date-fns'
import { Controller } from 'react-hook-form'

import * as S from './CalendarInput.styles.tsx'

import type { dayType } from '@components/calendar-input/CalendarInput.type.ts'
import { ICalendarInput } from '@components/calendar-input/CalendarInput.type.ts'

import 'react-calendar/dist/Calendar.css'

const CalendarInput = ({ formLabel, control }: ICalendarInput) => {
  const [value, onChange] = useState(new Date())

  return (
    <S.Wrapper>
      <S.Content>
        <S.DateText>
          {format(value, 'yyyy.MM.dd')}
          {`(${DAY_TO_STRING[getDay(value) as dayType]})`}
        </S.DateText>
        <Controller
          name={formLabel}
          control={control}
          defaultValue={value}
          render={({ field }) => (
            <S.StyleCalendar
              onChange={(e) => {
                field.onChange(e)
                onChange(e as Date)
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
            />
          )}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default CalendarInput
