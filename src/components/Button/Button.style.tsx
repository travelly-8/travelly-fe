import styled, { css } from 'styled-components'
import { Color, Size } from './Button.type'

const font = css`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.38rem;
  font-family: 'pretendard';
`

function colorCssString(color: Color) {
  let colorCss
  switch (color) {
    case 'primary':
      colorCss = css`
        background-color: #5849ff;
        color: white;
      `
      break

    default:
      colorCss = css`
        background-color: #5849ff;
        color: white;
      `
      break
  }
  return colorCss
}

function sizeCssString(size: Size) {
  let sizeCss
  switch (size) {
    case 'full':
      sizeCss = css``
      break

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

export const Button = styled.button<{ color: Color; size: Size }>`
  ${({ color }) => colorCssString(color)}
  ${({ size }) => sizeCssString(size)}
  ${font}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
