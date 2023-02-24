import Head from 'next/head'

export default function HeadSEO ({ title = 'Amazing tweet generator', description = 'Tweet AI generator!' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
