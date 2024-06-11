import { useEffect, useMemo, useState } from 'react'

import searchIcon from '@/assets/common/search.svg'
import useInfiniteCardsQuery from '@/hooks/api/productsAPI/useInfiniteCardsQuery'
import { sheet } from '@/store/sheet-slice.ts'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import { debounce } from 'lodash'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './SearchInput.style'

import type { IFormData } from './SearchInput.type'

interface IReccomendedSearchesProps {
  suggestList: string[]
}

const RecommendedSearches: React.FC<IReccomendedSearchesProps> = ({
  suggestList,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
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
        randSuggest.map((suggest) => (
          <S.Suggestion
            onClick={() => handleClick(suggest)}
            key={suggest}
            $suggestcnt={suggestlen === 1}
          >
            {suggest}
          </S.Suggestion>
        ))
      )}
    </S.SuggestionWrapper>
  )
}

const SearchInput = () => {
  const [keyword, setKeyword] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [onFocus, setOnFocus] = useState(false)
  const { register, handleSubmit } = useForm<IFormData>()

  const navigate = useNavigate()
  const onSubmit = (data: IFormData) => {
    registerRecentSearches(data.search)
    navigate(`/products/?input=${data.search}`)
  }

  const debounceSearch = useMemo(
    () =>
      debounce((keyword) => {
        setKeyword(keyword)
      }, 100),
    [],
  )

  const apiQuery = {
    page: 0,
    size: 15,
    sort: undefined,
    keyword: keyword,
    cityCode: undefined,
    contentType: undefined,
    startDate: undefined,
    endDate: undefined,
    startTime: undefined,
    endTime: undefined,
    minPrice: undefined,
    maxPrice: undefined,
  }

  const { data: suggestData } = useInfiniteCardsQuery(apiQuery)

  const cardsContents = useMemo(
    () =>
      suggestData ? suggestData.pages.flatMap((page) => page.content) : [],
    [suggestData],
  )
  useEffect(() => {
    const suggestionList = cardsContents
      .map((card) => card.name)
      .filter((name) => name.includes(keyword))

    setSuggestions(suggestionList)
  }, [keyword, cardsContents])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="검색어를 입력해주세요."
          onFocus={() => setOnFocus(true)}
          autoComplete="off"
          {...register('search', {
            onChange: (e) => {
              debounceSearch(e.target.value)
            },
            onBlur: () => {
              setTimeout(() => {
                setOnFocus(false)
              }, 100)
            },
          })}
        />
        <S.SearchIcon
          onClick={handleSubmit(onSubmit)}
          src={searchIcon}
          alt="searchIcon"
        />
        {onFocus && <RecommendedSearches suggestList={suggestions} />}
      </S.InputWrapper>
    </form>
  )
}

export default SearchInput
