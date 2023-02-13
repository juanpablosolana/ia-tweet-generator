import Head from 'next/head'

export default function HeadSEO() {
  return (
    <Head>
      <title>Amazing tweet generator</title>
      <meta name="description" content="Tweet AI generator!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}