import { useState } from 'react'

import { DAY_TO_STRING } from '@/constants/DAY_TO_STRING.ts'

import { format, getDay } from 'date-fns'

import * as S from './CalendarInput.styles.tsx'

import type {
  dayType,
  Value,
} from '@components/calendar-input/CalendarInput.type.ts'

import 'react-calendar/dist/Calendar.css'

const CalendarInput = () => {
  // TODO: Date 관련 타입 에러 수정
  // @ts-ignore
  const [value, onChange] = useState<Value>(new Date())

  return (
    <S.Wrapper>
      <S.Content>
        <S.DateText>
          {format(value, 'yyyy.MM.dd')}
          {`(${DAY_TO_STRING[getDay(value) as dayType]})`}
        </S.DateText>
        <S.StyleCalendar
          onChange={onChange}
          value={value}
          formatMonthYear={(_locale: string, value: string) =>
            format(value, 'yyyy년 MM월')
          }
          formatDay={(_locale: string, value: string) => format(value, 'd')}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default CalendarInput
