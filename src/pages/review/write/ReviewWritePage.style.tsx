import styled from 'styled-components'

export const HeaderTitle = styled.h1`
  padding-left: 2.4rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.06rem; /* 170% */
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`

export const Title = styled.h2`
  color: var(--color-black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.38rem; /* 170% */
  margin-bottom: 1.6rem;
`
export const RatingWrapper = styled.div`
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
`
export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`

export const CameraWrapper = styled.div`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-gray-light);
  background: var(--color-gray-bright);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  cursor: pointer;
`
export const CameraImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`
export const PhotoNum = styled.p`
  color: var(--color-gray-middle);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
`
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Textarea = styled.textarea`
  width: 32rem;
  height: 14rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-gray-light);
  resize: none;
  &:focus {
    outline: none;
    border: 0.1rem solid var(--color-main);
  }

  color: var(--color-gray-middle);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 180% */
`
export const TextLength = styled.p`
  color: var(--color-gray-middle);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 180% */
  position: absolute;
  bottom: 2.5rem;
  right: 1rem;
`

export const TextInfo = styled.p`
  color: var(--color-gray-middle);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem; /* 180% */
  text-align: right;
`
export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`
