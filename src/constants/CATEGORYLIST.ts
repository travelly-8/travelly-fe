import concert from '@/assets/header/concert.svg'
import culture from '@/assets/header/culture.svg'
import entire from '@/assets/header/entire.svg'
import food from '@/assets/header/food.svg'
import leisure from '@/assets/header/leisure.svg'
import shop from '@/assets/header/shop.svg'
import travelcourse from '@/assets/header/travelcourse.svg'
import travelspot from '@/assets/header/travelspot.svg'

const CATEGORYLIST = [
  { img: entire, description: '전체', url: `/products?type=0` },
  { img: travelspot, description: '관광지', url: `/products?type=12` },
  { img: culture, description: '문화시설', url: `/products?type=14` },
  { img: concert, description: '공연/행사', url: `/products?type=15` },
  { img: travelcourse, description: '여행 코스', url: `/products?type=25` },
  { img: leisure, description: '레포츠', url: `/products?type=28` },
  { img: shop, description: '쇼핑', url: `/products?type=38` },
  { img: food, description: '음식', url: `/products?type=39` },
]

export default CATEGORYLIST
