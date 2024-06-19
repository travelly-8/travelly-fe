import { sheet } from '@/store/sheet-slice/sheet-slice'
import { registerRecentSearches } from '@/utils/registerLocalStorage'
import shuffleArray from '@/utils/shuffleArray'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './SearchInput.style'

interface IRecommendedSearchesProps {
  suggestList: string[]
}

const RecommendedSearches: React.FC<IRecommendedSearchesProps> = ({
  suggestList,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const shuffledList = shuffleArray([...suggestList])
  const randSuggest = shuffledList.slice(0, 3)
  const suggestlen = randSuggest.length
  const handleClick = (suggest: string) => {
    registerRecentSearches(suggest)
    navigate(`/products?input=${suggest}`)
    dispatch(sheet({ name: 'search-sheet', status: false, text: '' }))
  }

  return (
    <S.SuggestionWrapper>
      {suggestlen === 0 ? (
        <S.Suggestion $suggestcnt={suggestlen === 0}>
          검색 결과가 없습니다.
        </S.Suggestion>
      ) : (
        randSuggest?.map((suggest) => (
          <S.Suggestion
            onClick={() => handleClick(suggest as string)}
            key={suggest as string}
            $suggestcnt={suggestlen === 1}
          >
            {suggest as string}
          </S.Suggestion>
        ))
      )}
    </S.SuggestionWrapper>
  )
}

export default RecommendedSearches
