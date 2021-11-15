import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Toolbar } from '@mui/material'
import DownloadCallback from '@components/DownloadCallback/DownloadCallback'
import Features from '@components/Features/Features'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Hero from '@components/Hero/Hero'
import HowItWorks from '@components/HowItWorks/HowItWorks'

const Home: NextPage = function () {
  return (
    <>
      <Head>
        <title>LinkedIn Formatter | Format your text in Bold and Italic</title>
        <meta
          name="description"
          content="Install a web extension to format your phrases and keywords in bold and italic on LinkedIn. Available to everyone for free."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box>
        <Header />
        <Toolbar />
        <Hero />
        <section id="a-new-way">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <DownloadCallback />
        <Footer />
      </Box>
    </>
  )
}

export default Home
