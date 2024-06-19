import down from '@/assets/searchsheet/down.svg'
import up from '@/assets/searchsheet/up.svg'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import { useNavigate } from 'react-router-dom'

import * as S from './SearchSheet.style'
import { IPopularSearchProps } from './SearchSheet.type'

const PopularSearch: React.FC<IPopularSearchProps> = ({
  popularData,
  time,
}) => {
  const topData = popularData?.slice(0, 5)
  const bottomData = popularData?.slice(5, 10)
  const navigate = useNavigate()

  const handleClickPopular = (search: string) => {
    registerRecentSearches(search)
    navigate(`/products/?input=${search}`)
  }

  return (
    <S.PopularSearch>
      <S.PopularLabelWrapper>
        <S.Label> 인기 검색어 (top 10)</S.Label>
        <S.Label>{time} 업데이트</S.Label>
      </S.PopularLabelWrapper>
      <S.PopularItem>
        <S.RankContainer>
          {topData?.map((item) => (
            <S.Rank
              key={item.keyword}
              onClick={() => handleClickPopular(item.keyword)}
            >
              <S.RankTopNumber>
                <span>{item.currentRank}</span>
                <span>{item.keyword}</span>
              </S.RankTopNumber>
              {item.rankChange === 0 ? (
                <S.RankChange>-</S.RankChange>
              ) : item.rankChange > 0 ? (
                <S.Icon src={up} alt="Up arrow" />
              ) : (
                <S.Icon src={down} alt="Down arrow" />
              )}
            </S.Rank>
          ))}
        </S.RankContainer>
        <S.RankContainer>
          {bottomData?.map((item) => (
            <S.Rank
              key={item.keyword}
              onClick={() => handleClickPopular(item.keyword)}
            >
              <S.RankBottomNumber>
                <span>{item.currentRank}</span>
                <span>{item.keyword}</span>
              </S.RankBottomNumber>
              {item.rankChange === 0 ? (
                <S.RankChange>-</S.RankChange>
              ) : item.rankChange > 0 ? (
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
