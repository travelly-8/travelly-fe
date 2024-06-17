import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Content = styled.div`
  margin-left: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 700;
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

export const InputWrapper = styled.div`
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const SectionTitle = styled.h3`
  color: var(--default-font-color, #2d3748);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
`

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-top: 0.4rem solid var(--color-gray-bright);
  padding: 2rem 2rem 2.4rem;
  button {
    width: 100%;
    border-radius: 0.4rem;
    border: 1px solid var(--gray_light, #dfdfdf);
    background: var(--white, #fff);
    display: flex;
    padding: 1.1rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  img {
    width: 0.6rem;
    height: 1.2rem;
  }
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  border-top: 0.4rem solid var(--color-gray-bright);
  padding: 1.2rem 2rem;

  button {
    width: 16rem;
    border-radius: 0.4rem;
    border: 1px solid var(--gray_light, #dfdfdf);
    background: var(--white, #fff);
    display: flex;
    padding: 1.1rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--default-font-color, #2d3748);
    text-align: center;
    white-space: nowrap;
  }
  img {
    width: 1.5rem;
    height: 1.4rem;
  }
  p {
    color: var(--color-black);
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  border-top: 0.4rem solid var(--color-gray-bright);
  padding: 2rem 2rem 2.4rem;
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
  margin-bottom: 11.4rem;
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
export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 0.4rem solid var(--color-gray-bright);

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }
`

export const TitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 2rem;
`

export const FileButton = styled.button`
  position: relative;
  width: 16rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray_light, #dfdfdf);
  background: var(--white, #fff);
  display: flex;
  padding: 1.1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const FileInput = styled.input`
  position: absolute;
  z-index: 2;
  color: transparent;
  width: 100%;
  cursor: pointer;
  &::file-selector-button {
    display: none;
  }
`

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 1.2rem;
`
export const Buttons = styled.div`
  width: 60%;
  margin-top: 1rem;
  float: right;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  white-space: nowrap;
`
export const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: var(--color-black);
  font-size: 1.4rem;
  cursor: pointer;
`
export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

export const AddressSheet = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  width: 100%;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const RoadAddress = styled.div`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.06rem; /* 170% */
`
