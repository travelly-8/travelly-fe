import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 10.2rem;
  height: 10.2rem;
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
`

export const Location = styled.p`
  display: flex;
  gap: 0.2rem;
`

export const City = styled.span``

export const District = styled.span``

export const DiscountPrice = styled.div`
  display: flex;
  gap: 0.1rem;
`

export const Discount = styled.span`
  color: var(--color-main);
  font-size: 1.2rem;
  font-weight: 500;
`

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`

export const Review = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-gray-middle);
`

export const Star = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`

export const ReviewPoint = styled.span``

export const ReviewCount = styled.span``
