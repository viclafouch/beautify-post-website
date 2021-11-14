import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="/favicon-57x57.png" />
          <link sizes="72x72" href="/favicon-72x72.png" />
          <link sizes="114x114" href="/favicon-114x114.png" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@TrustedSheriff" />
          <meta
            name="twitter:title"
            content="Linkedin Formatter | Format your text in Bold and Italic"
          />
          <meta
            name="twitter:description"
            content="Web extension that allows to bold and italicize text on the LinkedIn website"
          />
          <meta
            name="twitter:image"
            content="https://www.linkedin-formatter.app/linkedin-formatter.jpg"
          />
          <meta
            name="keywords"
            content="linkedin, bold, italic, format, text"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Linkedin Formatter | Format your text in Bold and Italic"
          />
          <meta
            property="og:description"
            content="Web extension that allows to bold and italicize text on the LinkedIn website"
          />
          <meta
            property="og:url"
            content="https://www.linkedin-formatter.app"
          />
          <meta property="og:site_name" content="Linkedin Formatter" />
          <meta
            property="og:image"
            content="https://www.linkedin-formatter.app/linkedin-formatter.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
