import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 28rem; // header 작업시 필요시 수정
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 1.1rem 1.6rem;
  border-radius: 1.6rem;
  background: var(--color-gray-bright);
  border: none;
  outline: none;
  &::placeholder {
    color: var(----color-gray-middle);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  right: 1.6rem;
`
