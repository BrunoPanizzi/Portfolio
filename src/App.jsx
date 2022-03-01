import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

import Layout from './Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
