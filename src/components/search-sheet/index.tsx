import { useEffect, useRef, useState } from 'react'

import { getTopKeyWords } from '@/api/productsAPI'
import type { ITopKeyword } from '@/components/search-sheet/SearchSheet.type'
import useGetTopKeyword from '@/hooks/api/productsAPI/useGetTopKeyword'
import useScrollHandlers from '@/hooks/useScrollHandlers'
import { sheet } from '@/store/sheet-slice/sheet-slice'
import { registerRecentSearches } from '@/utils/registerLocalStorage'
import shuffleArray from '@/utils/shuffleArray'

import ProductCard from '@components/product-card'
import RoundButton from '@components/round-button'
import SearchInput from '@components/search-input'
import SheetHeader from '@components/sheet-header'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PopularSearch from './PopularSearch'
import * as S from './SearchSheet.style'

import type { IProductCardData } from '@components/product-card/ProductCard.type'

const SearchSheet = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [deleteBtnClicked, setDeleteBtnClicked] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const storedRecentSearches = JSON.parse(
      localStorage.getItem('recentSearches') || '[]',
    )
    setRecentSearches(storedRecentSearches)
    setDeleteBtnClicked(false)
  }, [deleteBtnClicked])

  const recentProductData = JSON.parse(
    localStorage.getItem('recentProducts') || '[]',
  )

  const handleClickDelete = () => {
    localStorage.removeItem('recentSearches')
    setDeleteBtnClicked(true)
  }
  const handleBtnClick = (data: string) => {
    registerRecentSearches(data)
    navigate(`/products?input=${data}`)
    dispatch(sheet({ name: 'search-sheet', status: false, text: '' }))
  }

  const recentSearchRef = useRef<HTMLDivElement>(null)
  const recommendedSearchRef = useRef<HTMLDivElement>(null)
  const recentProductRef = useRef<HTMLDivElement>(null)

  const scrollRecentSearchHandler = useScrollHandlers(recentSearchRef)
  const scrollRecommendedSearchHandler = useScrollHandlers(recommendedSearchRef)
  const scrollRecentProductHandler = useScrollHandlers(recentProductRef)

  const { data: topKeywordData } = useGetTopKeyword(
    'topKeyword',
    getTopKeyWords,
  )
  const changeArray = [...(topKeywordData?.data ?? [])]
  const randTopKeywordData = shuffleArray(changeArray).slice(
    0,
    5,
  ) as ITopKeyword[]

  return (
    <>
      <SheetHeader>
        <SearchInput />
      </SheetHeader>
      <S.SheetWrapper>
        <S.SearchWordWrapper>
          <S.RecentContentWrapper>
            <S.Label>최근 검색어</S.Label>
            <S.DeleteButton onClick={handleClickDelete}>
              전체 삭제
            </S.DeleteButton>
          </S.RecentContentWrapper>
          <S.SearchWord ref={recentSearchRef} {...scrollRecentSearchHandler}>
            {recentSearches.map((data) => (
              <RoundButton.Gray
                key={data}
                size="small"
                onClick={() => handleBtnClick(data)}
              >
                {data}
              </RoundButton.Gray>
            ))}
          </S.SearchWord>
        </S.SearchWordWrapper>
        <S.SearchWordWrapper>
          <S.RecentContentWrapper>
            <S.Label>추천 검색어</S.Label>
          </S.RecentContentWrapper>
          <S.SearchWord
            ref={recommendedSearchRef}
            {...scrollRecommendedSearchHandler}
          >
            {randTopKeywordData?.map((data) => (
              <RoundButton.Gray
                key={data.keyword}
                size="small"
                onClick={() => handleBtnClick(data.keyword)}
              >
                {data.keyword}
              </RoundButton.Gray>
            ))}
          </S.SearchWord>
        </S.SearchWordWrapper>
        <PopularSearch
          popularData={topKeywordData?.data}
          time={topKeywordData?.time}
        />
        <S.RecentWatchProductWrapper>
          <S.RecentContentWrapper>
            <S.Label>최근 본 상품</S.Label>
          </S.RecentContentWrapper>
          <S.RecentWatchProduct
            ref={recentProductRef}
            {...scrollRecentProductHandler}
          >
            {recentProductData.map((cardData: IProductCardData) => (
              <ProductCard key={cardData.id} cardData={cardData} size="sm" />
            ))}
          </S.RecentWatchProduct>
        </S.RecentWatchProductWrapper>
      </S.SheetWrapper>
    </>
  )
}

export default SearchSheet
