import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap"
            rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
