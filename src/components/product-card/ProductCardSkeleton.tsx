import styled, { keyframes } from 'styled-components'

import { ISizeProps } from './ProductCard.style'

interface IProductCardSkeletonProps {
  count: number
  size: ISizeProps['size']
}

function ProductCardSkeleton({ count, size }: IProductCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonContainer key={index} size={size}>
          <SkeletonCardImage size={size} />
          <SkeletonContentsWrapper>
            <SkeletonText />
            <SkeletonLocation />
            <SkeletonDiscountPrice />
            <SkeletonReview>
              <SkeletonStar />
              <SkeletonText />
            </SkeletonReview>
          </SkeletonContentsWrapper>
        </SkeletonContainer>
      ))}
    </>
  )
}

export default ProductCardSkeleton

interface SkeletonProps {
  size: ISizeProps['size']
}

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const SkeletonContainer = styled.li<SkeletonProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  ${({ size }) => `
    width: ${size === 'sm' || size === 'summary' ? '10.2rem' : '100%'};
  `}
  overflow: hidden;
  cursor: pointer;
  animation: ${pulse} 1.5s infinite;
`

const SkeletonCardImage = styled.div<SkeletonProps>`
  ${({ size }) => `
    width: ${size === 'sm' || size === 'summary' ? '10.2rem' : '100%'};
    height: ${size === 'sm' || size === 'summary' ? '10.2rem' : '15.2rem'};
  `}
  border-radius: 0.5rem;
  background-color: var(--color-gray-light);
  margin-bottom: 1rem;
`

const SkeletonContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-black);
`

const SkeletonText = styled.div`
  height: 1.8rem;
  background-color: var(--color-gray-light);
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`

const SkeletonLocation = styled.div`
  display: flex;
  gap: 0.2rem;
  height: 1.5rem;
  width: 40%;
  margin-bottom: 0.1rem;
  background-color: var(--color-gray-light);
  border-radius: 0.25rem;
`

const SkeletonDiscountPrice = styled.div`
  display: flex;
  gap: 0.3rem;
  height: 1.8rem;
  width: 50%;
  margin-bottom: 0.1rem;
  background-color: var(--color-gray-light);
  border-radius: 0.25rem;
`

const SkeletonReview = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  height: 1.5rem;
  width: 50%;
  background-color: var(--color-gray-light);
  border-radius: 0.25rem;
`

const SkeletonStar = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  background-color: var(--color-gray-light);
  border-radius: 50%;
`
