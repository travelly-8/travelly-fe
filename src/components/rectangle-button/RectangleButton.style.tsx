import styled, { css } from 'styled-components'

import { ColorType, SizeType } from './RectangleButton.type'

const font = css`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.38rem;
  font-family: 'pretendard';
`

function colorCssString(color: ColorType, size: SizeType) {
  let colorCss
  switch (color) {
    case 'primary':
      colorCss = css`
        background-color: var(--color-main);
        color: var(--color-white);
      `
      break
    case 'disabled':
      if (size === 'medium') {
        colorCss = css`
          background-color: var(--color-gray-light);
          color: var(--color-white);
        `
      }
      if (size === 'large') {
        colorCss = css`
          background-color: var(--color-gray-bright);
          color: var(--color-gray-middle);
        `
      }
      break
    default:
      colorCss = css`
        background-color: var(--color-main);
        color: var(--color-white);
      `
      break
  }
  return colorCss
}

function sizeCssString(size: SizeType) {
  let sizeCss
  switch (size) {
    case 'large':
      sizeCss = css`
        padding: 1.1rem 2rem;
        width: 32rem;
        height: 4rem;
        border-radius: 0.4rem;
      `
      break

    case 'medium':
      sizeCss = css`
        padding: 1.1rem 2rem;
        width: 20.8rem;
        height: 4rem;
        border-radius: 0.4rem;
      `
      break

    case 'small':
      sizeCss = css`
        padding: 1.1rem 2rem;
        width: 11rem;
        height: 3.2rem;
        gap: 1rem;
        border-radius: 1.6rem;
      `
      break

    default:
      sizeCss = css`
        padding: 1.1rem 2rem;
        width: 20.8rem;
        height: 4rem;
        border-radius: 0.4rem;
      `
      break
  }
  return sizeCss
}

export const Button = styled.button<{ color: ColorType; size: SizeType }>`
  ${({ color, size }) => colorCssString(color, size)}
  ${({ size }) => sizeCssString(size)}
  ${font}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
