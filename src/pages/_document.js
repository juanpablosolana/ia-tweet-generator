import { Html, Head, Main, NextScript } from 'next/document'
import { GTMnoscript } from '@/services/gtag'
import Script from 'next/script'

export default function Document () {
  return (
    <Html lang='en'>
      <Script
        async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8152954513756798'
        crossorigin='anonymous'
      />
      <Head />
      <body>
        <GTMnoscript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
