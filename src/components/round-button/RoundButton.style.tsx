import { css, styled } from 'styled-components'

import type { SizeType } from '@components/round-button/RoundButton.type.ts'

const basicStyle = css`
  border-radius: 1.6rem;
  border: none;

  padding-bottom: 1rem;
  padding-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

function sizeCssString(size: SizeType) {
  let sizeCss
  switch (size) {
    case 'full':
      sizeCss = css``
      break

    case 'large':
      sizeCss = css`
        width: 32rem;
        height: 4rem;
      `
      break

    case 'medium':
      sizeCss = css`
        width: 11rem;
        height: 3.2rem;
        font-size: 14px;
        font-weight: 500;
      `
      break

    case 'small':
      sizeCss = css`
        width: 4.4rem;
        height: 2.4rem;
        font-size: 12px;
        font-weight: 300;
      `
      break
  }
  return sizeCss
}

function selectedCssString(selected: boolean) {
  if (selected) {
    return css`
      color: var(--color-main);
      border: 1px solid var(--color-main);
      background-color: var(--color-white);
    `
  }
  return css`
    background-color: var(--color-gray-bright);
  `
}

export const BasicButton = styled.button`
  ${basicStyle}
`

export const PrimaryButton = styled.button<{
  $size: SizeType
}>`
  ${basicStyle};
  ${({ $size }) => sizeCssString($size)}

  padding-right: 2rem;
  padding-left: 2rem;

  background-color: var(--color-main);
  color: var(--color-white);
`

export const GrayButton = styled.button<{
  $size: SizeType
  $selected: boolean
}>`
  ${basicStyle};
  ${({ $size }) => sizeCssString($size)}
  ${({ $selected }) => selectedCssString($selected)}
  padding: 1rem;
`
