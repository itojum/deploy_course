import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider, ThemeProvider, createTheme } from 'smarthr-ui'
import { Provider as JotaiProvider } from 'jotai'
import 'smarthr-ui/smarthr-ui.css'

import { App } from './App'
import './styles/index.css';

const theme = createTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <IntlProvider locale="ja">
          <App />
        </IntlProvider>
      </ThemeProvider>
    </JotaiProvider>
  </StrictMode>,
)
