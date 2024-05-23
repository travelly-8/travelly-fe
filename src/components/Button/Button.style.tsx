import styled, { css } from 'styled-components'
import { Color, Size } from './Button.type'

const font = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 23.8px;
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
        padding: 11px 20px;
        width: 320px;
        height: 40px;
      `
      break

    case 'medium':
      sizeCss = css`
        padding: 11px 20px;
        width: 208px;
        height: 40px;
      `
      break

    case 'small':
      sizeCss = css`
        padding: 11px 20px;
        width: 110px;
        height: 32px;
        gap: 10px;
        border-radius: 16px;
      `
      break

    default:
      sizeCss = css`
        padding: 11px 20px;
        width: 208px;
        height: 40px;
      `
      break
  }
  return sizeCss
}

export const StyledButton = styled.button<{ color: Color; size: Size }>`
  ${({ color }) => colorCssString(color)}
  ${({ size }) => sizeCssString(size)}
  ${font}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
