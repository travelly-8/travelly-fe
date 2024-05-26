import styled from 'styled-components'

interface SizeProps {
  size: 'sm' | 'bg'
}

export const Container = styled.div<SizeProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ size }) => `
    width: ${size === 'sm' ? '10.2rem' : '15.2rem'};
  `}
`

export const CardImage = styled.img<SizeProps>`
  ${({ size }) => `
    width: ${size === 'sm' ? '10.2rem' : '15.2rem'};
    height: ${size === 'sm' ? '10.2rem' : '15.2rem'};
  `}
`

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-black);
  line-height: 1.8rem;
`

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.38rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`

export const Location = styled.p<SizeProps>`
  display: flex;
  gap: 0.2rem;
  ${({ size }) => `
    font-size: ${size === 'sm' ? '1rem' : '1.2rem'};
  `}
`

export const City = styled.span``

export const District = styled.span``

export const DiscountPrice = styled.div<SizeProps>`
  display: flex;
  gap: 0.1rem;
  ${({ size }) => `
    font-size: ${size === 'sm' ? '1.2rem' : '1.4rem'};
  `}
`

export const Discount = styled.span`
  color: var(--color-main);
  font-size: inherit;
  font-weight: 500;
`

export const Price = styled.span`
  font-size: inherit;
  font-weight: 500;
`

export const Review = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  color: var(--color-gray-middle);
  ${({ size }) => `
    font-size: ${size === 'sm' ? '1rem' : '1.2rem'};
  `}
`

export const Star = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`

export const ReviewPoint = styled.span``

export const ReviewCount = styled.span``
