import BookmarkButton from '@components/bookmark-button'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 0 2rem 0;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  z-index: 100;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-light);
`

export const FooterBookmarkButton = styled(BookmarkButton)`
  width: 3.6rem;
  height: 3.6rem;
`
export const RightSection = styled.div<{ $buttontype: string }>`
  display: flex;
  justify-content: ${({ $buttontype }) =>
    $buttontype === 'reservation' ? 'flex-end' : 'space-between'};
  align-items: center;
  gap: 3rem;
  width: 100%;
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
