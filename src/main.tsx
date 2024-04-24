import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import SingIn  from './pages/SingIn'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>,
)
