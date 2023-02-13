import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { GTMscript } from '@/components/Gtag';


export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Analytics />
    <GTMscript />
  </>
}
