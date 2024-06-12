import { useEffect, useMemo, useState } from 'react'

import searchIcon from '@/assets/common/search.svg'
import useInfiniteCardsQuery from '@/hooks/api/productsAPI/useInfiniteCardsQuery'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import { debounce } from 'lodash'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import RecommendedSearches from './RecommendedSearches'
import * as S from './SearchInput.style'

import type { IFormData } from './SearchInput.type'

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
      }, 500),
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
