import { Control } from 'react-hook-form'

export type dayType = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface ICalendarInput {
  formLabel: string
  control: Control
  calendarType?: 'singleDate' | 'rangeDate'
}
