import styled from 'styled-components'

export const SheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0rem 2.4rem 0;
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
  cursor: pointer;
`
export const SearchWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.2rem;
`
export const RecentContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`
export const SearchWord = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0 2rem;
  overflow-x: hidden;
`
export const PopularSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 2rem;
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
  gap: 1.2rem;
`

export const RecentWatchProduct = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 0 2rem;
  overflow-x: hidden;
`
