import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import 'aos/dist/aos.css'
import theme from '@theme/index'
import Aos from 'aos'

const App = function ({ Component, pageProps }: AppProps): React.ReactElement {
  React.useEffect(() => {
    Aos.init({
      disable: 'mobile'
    })
    Aos.refresh()
  }, [])

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
