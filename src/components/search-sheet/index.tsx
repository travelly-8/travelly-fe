import { useEffect, useRef, useState } from 'react'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { sheet } from '@/store/sheet-slice.ts'
import { registerRecentSearches } from '@/utils/registerLocalStorage'

import ProductCard from '@components/product-card'
import RoundButton from '@components/round-button'
import SearchInput from '@components/search-input'
import SheetHeader from '@components/sheet-header'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PopularSearch from './PopularSearch'
import * as S from './SearchSheet.style'

import type { IProductCardData } from '@components/product-card/ProductCard.type'

const recommendData = [
  '부산',
  '서울',
  '제주',
  '속초',
  '인천 파라다이스 호텔',
  '대전 성심당',
]

const popularData = {
  time: '00:00',
  items: [
    { rank: 1, search: '부산', change: 'up' },
    { rank: 2, search: '서울', change: 'down' },
    { rank: 3, search: '제주', change: 'same' },
    { rank: 4, search: '강릉', change: 'same' },
    { rank: 5, search: '대구', change: 'up' },
    { rank: 6, search: '대전', change: 'down' },
    { rank: 7, search: '파주', change: 'up' },
    { rank: 8, search: '수원', change: 'same' },
    { rank: 9, search: '안산', change: 'up' },
    { rank: 10, search: '안성', change: 'down' },
  ],
}

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
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useHorizontalScroll()

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
          <S.SearchWord
            ref={recentSearchRef}
            onMouseDown={handleMouseDown(recentSearchRef)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove(recentSearchRef)}
            onTouchStart={handleMouseDown(recentSearchRef)}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove(recentSearchRef)}
          >
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
            onMouseDown={handleMouseDown(recommendedSearchRef)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove(recommendedSearchRef)}
            onTouchStart={handleMouseDown(recommendedSearchRef)}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove(recommendedSearchRef)}
          >
            {recommendData.map((data) => (
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
        <PopularSearch popularData={popularData} />
        <S.RecentWatchProductWrapper>
          <S.RecentContentWrapper>
            <S.Label>최근 본 상품</S.Label>
          </S.RecentContentWrapper>
          <S.RecentWatchProduct
            ref={recentProductRef}
            onMouseDown={handleMouseDown(recentProductRef)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove(recentProductRef)}
            onTouchStart={handleMouseDown(recentProductRef)}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleMouseMove(recentProductRef)}
          >
            {recentProductData.map((cardData: IProductCardData) => (
              <ProductCard key={cardData.name} cardData={cardData} size="sm" />
            ))}
          </S.RecentWatchProduct>
        </S.RecentWatchProductWrapper>
      </S.SheetWrapper>
    </>
  )
}

export default SearchSheet
