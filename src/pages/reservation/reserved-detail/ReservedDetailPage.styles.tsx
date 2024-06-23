import styled from 'styled-components'

export const HeaderTitle = styled.span`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.06rem;
`

export const PageContainer = styled.div`
  padding: 2rem;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ProductCard = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-gray-light);
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-gray-light);
`
export const ProductImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  object-fit: cover;
`

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ProductName = styled.span`
  font-size: 1.4rem;
`

export const ProductPrice = styled.span`
  font-size: 1.2rem;
`

export const ProductDate = styled.span`
  font-size: 1.2rem;
  color: var(--color-gray-middle);
`
export const SheetItem = styled.div<{ $underline: boolean }>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  ${({ $underline }) =>
    $underline &&
    `border-bottom:1px solid var(--color-gray-bright); padding-bottom: 2rem;`}
`

export const ItemKey = styled.div`
  font-size: 1.4rem;
  color: var(--color-black);
`

export const ItemValue = styled.div<{ $primary: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ $primary }) =>
    $primary ? 'var(--color-main)' : 'var(--color-gray-middle)'};
`
