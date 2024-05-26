// TODO: Date 관련 타입 에러 수정

export type dayType = 0 | 1 | 2 | 3 | 4 | 5 | 6
// @ts-ignore
export type ValuePiece = Date | null
export type Value = ValuePiece | [ValuePiece, ValuePiece]
