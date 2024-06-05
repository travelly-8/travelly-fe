import BookmarkButton from '@components/bookmark-button'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  position: absolute;
  bottom: 0;

  padding: 2rem;
  border-top: 1px solid var(--color-gray-light);
`

export const FooterBookmarkButton = styled(BookmarkButton)`
  position: static;
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
