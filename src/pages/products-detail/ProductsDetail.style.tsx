import styled from 'styled-components'

export const PageContainer = styled.main<{
  $isSearchSheet: boolean
  $isPhotoReviewsSheet: boolean
}>`
  background-color: var(--color-white);
  display: ${({ $isSearchSheet, $isPhotoReviewsSheet }) =>
    $isSearchSheet || $isPhotoReviewsSheet ? 'none' : 'block'};
  padding-bottom: 6rem;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem 5.4rem;
`

export const LoadMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.1rem 2rem;
  border: 0.05rem solid var(--color-gray-light);
  border-radius: 0.8rem;
  color: var(--color-black);
  font-size: 1.4rem;

  cursor: pointer;
`
