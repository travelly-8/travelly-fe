import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --color-main: #5849FF;
        --color-white: #FFFFFF;
        --color-black: #333333;
        --color-gray-middle: #787878;
        --color-gray-light: #DFDFDF;
        --color-gray-bright: #EDEDED;
    }

    *, 
    *::after, 
    *::before {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
    }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: "Pretendard", sans-serif;
    cursor: default;
  }

  a {
        text-decoration: none;
        color: inherit;
    }

    button{
        cursor: pointer;
    }
`

export default GlobalStyles
