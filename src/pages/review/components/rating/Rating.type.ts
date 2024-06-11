export interface IRating {
  readOnly?: boolean
  score?: number
  onChange: (value: number) => void
}
