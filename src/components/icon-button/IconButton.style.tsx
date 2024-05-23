import styled from 'styled-components'

import { ButtonType } from './IconButton.type'

function textColor(buttonType: ButtonType) {
  switch (buttonType) {
    case 'default':
      return 'var(--color-black)'
    case 'selected':
      return 'var(--color-main)'
    case 'unselected':
      return 'var(--color-gray-middle)'
  }
}

function backgroundColor(buttonType: ButtonType) {
  switch (buttonType) {
    case 'default':
      return 'var(--white)'
    case 'selected':
      return 'var(--color-white)'
    case 'unselected':
      return 'var(--color-gray-bright)'
  }
}

function borderColor(buttonType: ButtonType) {
  switch (buttonType) {
    case 'default':
      return 'var(--color-gray-light)'
    case 'selected':
      return 'var(--color-main)'
    case 'unselected':
      return 'var(--color-gray-light)'
  }
}

export const Wrapper = styled.button<{ buttonType: ButtonType }>`
  width: 15.2rem;
  height: 15.2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${(props) => borderColor(props.buttonType)};
  background: ${(props) => backgroundColor(props.buttonType)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: ${(props) =>
    props.buttonType === 'selected' &&
    '0px 0px 5px 0px rgba(39, 0, 195, 0.25)'};
`

export const Icon = styled.img`
  width: 8rem;
  height: 8rem;
`

export const Text = styled.span<{ buttonType: ButtonType }>`
  color: ${(props) => textColor(props.buttonType)};
  font-size: 1.4rem;
  font-weight: 700;
`
