import React from 'react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@theme/index'
import Aos from 'aos'

import 'aos/dist/aos.css'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export default App
