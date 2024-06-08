import styled from 'styled-components'

export const HeaderTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`

export const PhotosWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
`

export const PhotoReview = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
  border-radius: 0.5rem;
`
