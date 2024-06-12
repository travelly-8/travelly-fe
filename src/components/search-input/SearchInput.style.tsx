import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  overflow: visible;
`

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 1.1rem 1.6rem;
  border-radius: 1.6rem;
  background: var(--color-gray-bright);
  border: none;
  outline: none;
  &::placeholder {
    color: var(--color-gray-middle);
    font-size: 1.2rem;
    line-height: normal;
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
`

export const SuggestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-gray-light);
  border-radius: 0.6rem;
  z-index: 100;
  width: 100%;
  top: 4.8rem;
  left: 0;
`
export const Suggestion = styled.div<{ $suggestcnt?: boolean }>`
  width: 100%;
  padding: 1.6rem;
  background-color: var(--color-white);
  border-bottom: 0.1rem solid var(--color-gray-light);
  cursor: pointer;
  &:hover {
    background: var(--color-gray-middle);
  }
  &:first-child {
    border-radius: 0.6rem 0.6rem 0 0;
  }
  &:last-child {
    border-bottom: none;
    border-radius: ${({ $suggestcnt }) =>
      $suggestcnt ? '0.6rem 0.6rem 0.6rem 0.6rem' : '0 0 0.6rem 0.6rem'};
  }
`
