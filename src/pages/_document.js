import { Html, Head, Main, NextScript } from 'next/document'
import { GTMnoscript } from '@/services/gtag'

export default function Document () {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <GTMnoscript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
