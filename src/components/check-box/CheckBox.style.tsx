import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;
`

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 1.4rem;
  height: 1.4rem;
  border: 0.1rem solid var(--color-gray-light);
  border-radius: 0.2rem;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 0.1rem solid var(--color-main);
    border-radius: 0.2rem;
  }

  &:checked {
    border: none;
    background: var(--color-main);
  }

  &:disabled {
    border: none;
    background: #ddd;
    cursor: not-allowed;
  }

  &:checked:after {
    content: '';
    position: absolute;
    left: 0.2rem;
    top: 0.6rem;
    background: var(--color-white);
    width: 0.2rem;
    height: 0.2rem;
    box-shadow:
      0.2rem 0 0 var(--color-white),
      0.4rem 0 0 var(--color-white),
      0.4rem -0.2rem 0 var(--color-white),
      0.4rem -0.4rem 0 var(--color-white),
      0.4rem -0.6rem 0 var(--color-white),
      0.4rem -0.8rem 0 var(--color-white);
    transform: rotate(45deg);
  }
`

export const Text = styled.span`
  font-size: 1.2rem;
  color: var(--color-black);
`
