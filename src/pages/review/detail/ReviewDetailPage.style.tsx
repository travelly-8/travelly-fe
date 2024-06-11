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
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0 2rem;
`

export const Title = styled.h2`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.06rem; /* 170% */
  margin-bottom: 0.8rem;
`
export const NumOfComments = styled.p<{ numOfComments: number }>`
  color: ${(props) =>
    props.numOfComments === 0
      ? 'var(--color-gray-middle)'
      : 'var(--color-main)'};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.06rem; /* 170% */
`

export const CommentCardWrapper = styled.div`
  height: 30vh;
  overflow-y: scroll;
`

export const InputOuterWrapper = styled.div<{ numOfComments: number }>`
  padding: ${(props) => (props.numOfComments === 0 ? '0' : '0.8rem 0rem')};
  margin: ${(props) => (props.numOfComments === 0 ? '0 2rem' : '1.6rem 2rem')};
  border-top: ${(prop) =>
    prop.numOfComments === 0 ? 'none' : '0.1rem solid var(--color-gray-light)'};
  position: fixed;
  bottom: 0;
  @media screen and (max-width: 767px) {
    width: calc(100% - 4rem);
  }
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`

export const InputWrapper = styled.form<{ inputValue: string }>`
  border-radius: 0.5rem;
  background: var(--color-gray-bright);
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  button {
    background-color: transparent;
    color: ${(props) =>
      props.inputValue.length > 0 ? 'var(--color-main)' : 'var(--color-black)'};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.38rem; /* 170% */
  }

  input {
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }
`

interface ISheet {
  idx: number
}
export const SheetTextWraeppr = styled.div<ISheet>`
  display: flex;
  padding: 1.2rem 0.25rem;
  border-top: ${(props) =>
    props.idx > 1 ? '0.1rem solid var(--color-gray-light)' : '0'};
  border-bottom: ${(props) =>
    props.idx > 1 ? '0.1rem solid var(--color-gray-light)' : '0'};

  width: 100%;
  cursor: pointer;
  position: relative;
`
export const SheetText = styled.span`
  color: var(--colro-black);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.38rem; /* 170% */
  white-space: nowrap;
`
