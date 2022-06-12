import type { NextPage } from 'next'
import Head from 'next/head'

const Download: NextPage = () => {
  return (
    <Head>
      <title>Beautify Post | Download</title>
      <meta
        name="description"
        content="Install a web extension to format your phrases and keywords in bold and italic on LinkedIn. Available to everyone for free."
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        httpEquiv="refresh"
        content="0;url=https://chrome.google.com/webstore/detail/beautify-post/ogngclmkdkdmdekchmghneecloclcffg"
      />
    </Head>
  )
}

export default Download
