export const DAY_TO_STRING = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
} as const

export const LOCALE_CODE_LIST: { [key: string]: string } = {
  0: '전체',
  1: '서울',
  9: '경기도',
  2: '인천',
  8: '세종',
  3: '대전',
  12: '충남',
  11: '충북',
  10: '강원도',
  14: '경남',
  13: '경북',
  4: '대구',
  6: '부산',
  7: '울산',
  16: '전남',
  15: '전북',
  5: '광주',
  17: '제주도',
} as const

export const SORT_FIELD: { [key: string]: string } = {
  최신순: 'Newest',
  '리뷰 많은 순': 'MostReviews',
  평점순: 'HighestRating',
  '낮은 가격순': 'LowestPrice',
} as const
