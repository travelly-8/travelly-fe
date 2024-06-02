import { Control } from 'react-hook-form'

export interface IRangeSlider {
  initMin: number
  initMax: number
  min: number
  max: number
  step: number
  minGap: number
  measure: string
  minLabel: string
  maxLabel: string
  control: Control
}
