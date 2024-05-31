import down from '@/assets/searchsheet/down.svg'
import up from '@/assets/searchsheet/up.svg'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import { useNavigate } from 'react-router-dom'

import * as S from './SearchSheet.style'
import { IPopularSearchProps } from './SearchSheet.type'

const PopularSearch: React.FC<IPopularSearchProps> = ({ popularData }) => {
  const topData = popularData.items.slice(0, 5)
  const bottomData = popularData.items.slice(5, 10)
  const navigate = useNavigate()

  const handleClickPopular = (search: string) => {
    registerRecentSearches(search)
    navigate(`/products/?input=${search}`)
  }

  return (
    <S.PopularSearch>
      <S.PopularLabelWrapper>
        <S.Label> 인기 검색어 (top 10)</S.Label>
        <S.Label>{popularData.time} 업데이트</S.Label>
      </S.PopularLabelWrapper>
      <S.PopularItem>
        <S.RankContainer>
          {topData.map((item) => (
            <S.Rank
              key={item.search}
              onClick={() => handleClickPopular(item.search)}
            >
              <S.RankTopNumber>
                <span>{item.rank}</span>
                <span>{item.search}</span>
              </S.RankTopNumber>
              {item.change === 'same' ? (
                <S.RankChange>-</S.RankChange>
              ) : item.change === 'up' ? (
                <S.Icon src={up} alt="Up arrow" />
              ) : (
                <S.Icon src={down} alt="Down arrow" />
              )}
            </S.Rank>
          ))}
        </S.RankContainer>
        <S.RankContainer>
          {bottomData.map((item) => (
            <S.Rank
              key={item.search}
              onClick={() => handleClickPopular(item.search)}
            >
              <S.RankBottomNumber>
                <span>{item.rank}</span>
                <span>{item.search}</span>
              </S.RankBottomNumber>
              {item.change === 'same' ? (
                <S.RankChange>-</S.RankChange>
              ) : item.change === 'up' ? (
                <S.Icon src={up} alt="Up arrow" />
              ) : (
                <S.Icon src={down} alt="Down arrow" />
              )}
            </S.Rank>
          ))}
        </S.RankContainer>
      </S.PopularItem>
    </S.PopularSearch>
  )
}

export default PopularSearch
