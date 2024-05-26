import styled from 'styled-components'

export const SheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0rem 2.4rem 2rem;
  background-color: var(--color-white);
  gap: 3.6rem;
  width: 100%;
`
export const Label = styled.label`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const DeleteButton = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-right: 2rem;
  cursor: pointer;
`
export const SearchWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`
export const RecentContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SearchWord = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  overflow-x: hidden;
`
export const PopularSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 2rem;
`

export const PopularLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PopularItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 47%;
  }
`
export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`
export const Rank = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const RankTopNumber = styled.div`
  display: flex;
  gap: 1.6rem;
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const RankBottomNumber = styled.div`
  display: flex;
  gap: 1.6rem;
  color: var(--color-black);
  font-size: 1.2rem;
  line-height: 1.8rem;

  :last-child {
    gap: 0;
  }
`

export const RankChange = styled.span`
  color: var(--color-gray-light);
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const Icon = styled.img`
  width: 0.6rem;
  height: 0.4rem;
`

export const RecentWatchProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const RecentWatchProduct = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  overflow-x: hidden;
`

export const Product = styled.div`
  display: flex;
  width: 10.2rem;
  min-width: 10.2rem;
  height: 19.2rem;
` // 나중에 카드로 변경
