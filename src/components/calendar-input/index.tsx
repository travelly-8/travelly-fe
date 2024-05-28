import { useState } from 'react'

import { DAY_TO_STRING } from '@/constants/FILTERING_BROWSING.ts'

import { format, getDay } from 'date-fns'

import * as S from './CalendarInput.styles.tsx'

import type { dayType } from '@components/calendar-input/CalendarInput.type.ts'

import 'react-calendar/dist/Calendar.css'

const CalendarInput = () => {
  const [value, onChange] = useState(new Date())

  return (
    <S.Wrapper>
      <S.Content>
        <S.DateText>
          {format(value, 'yyyy.MM.dd')}
          {`(${DAY_TO_STRING[getDay(value) as dayType]})`}
        </S.DateText>
        {/*TODO: 추후 타입에러 수정*/}
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
          showNeighboringMonth={false}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default CalendarInput
