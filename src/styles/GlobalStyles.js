import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open sans', sans-serif;
    color: ${({ theme }) => theme.colors.text}
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`