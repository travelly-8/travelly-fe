import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Regular.woff2') format('woff2'),
         url('/src/assets/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Bold.woff2') format('woff2'),
         url('/src/assets/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    --color-main: #5849FF;
    --color-white: #FFFFFF;
    --color-black: #333333;
    --color-gray-middle: #787878;
    --color-gray-light: #DFDFDF;
    --color-gray-bright: #EDEDED;
    --color-caution: #CD0000;
  }

  *, 
  *::after, 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    cursor: default;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }
`

export default GlobalStyles
