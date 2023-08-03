import '@/styles/globals.css'
import Loglib from '@loglib/tracker/react'
import { GTMscript } from '@/services/gtag'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Loglib config={{
        id: 'www_tweetgenerator',
        host: 'https://www.loglib.io'
      }}
      />
      <GTMscript />
    </>
  )
}
