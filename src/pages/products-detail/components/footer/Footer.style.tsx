import BookmarkButton from '@components/bookmark-button'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.6rem;
  position: sticky;
  bottom: 0;
  z-index: 100;
  padding: 2rem;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-light);
`

export const FooterBookmarkButton = styled(BookmarkButton)`
  width: 3.6rem;
  height: 3.6rem;
`
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const Text = styled.div`
  font-size: 1.4rem;
  display: flex;
  gap: 1rem;
`
export const DiscountText = styled.div`
  color: var(--color-main);
`
export const PriceText = styled.div``
