import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES } from '@/services/categories'
import createTweet from '@/services/createTweet'
import Loader from '@/components/Loader'
import DataList from '@/components/DataList'

export default function Home() {

  const [message, setMessage] = useState('Tweet generator')
  const [isLoding, setIsLoading] = useState(false)
  const [imgGenerator, setImgGenerator] = useState('https://openai-labs-public-images-prod.azureedge.net/user-tCPvTKI6Pso3HGPyZ1f2Xsej/generations/generation-MYtnZb2JIvgSLqbMkBRbrZMk/image.webp')

  const handlerMagic = (e) => {
    e.preventDefault()
    const { value } = e.target[0]
    if (value === '') return
    setIsLoading(true)
    Promise.all([
      createTweet('tweet', value),
      createTweet('images', value)
    ])
      .then(([message, imgGenerator]) => {
        setMessage(message)
        setImgGenerator(imgGenerator)
      })
      .catch((error) => {
        console.error(error)
        setMessage('Error, IA timeout or invalid category')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handlerTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${message}`)
  }

  return (
    <>
      <Head>
        <title>Amazing tweet generator</title>
        <meta name="description" content="Tweet AI generator!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl sm:flex">
            <Image src={imgGenerator} className="mr-3 h-6 sm:h-9 rounded-full" alt="Tweet generator Logo" width={50} height={50} />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tweet Generator | BETA</span>
          </div>
        </nav>
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Tweet Generator</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Tweet Generator is a project to generate artificially intelligent tweets. <br/>The project uses natural language processing and deep learning algorithms to generate tweets that are similar to what humans would write. <br/> The project is currently in early stages of development, but it is a promising start for automated tweet generation.</p>
            {isLoding
              ? <Loader />
              : <DataList handlerMagic={handlerMagic} CATEGORIES={CATEGORIES} />
            }
          </div>
          <div className="py-2 lg:mt-0 lg:col-span-5 lg:flex items-center flex-col gap-4">
            {
              isLoding ? <Loader /> : <Image src={imgGenerator} width={400} height={400} alt='Image create by AI' className='rounded-lg'/>
            }
            {isLoding? <Loader/>:<p>{message}</p>}
            <button onClick={handlerTweet} classNameName= "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Share tweet!</button>
          </div>
        </div>
      </section>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <footer className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src={imgGenerator} className="mr-3 h-6 sm:h-9 rounded-full" alt="Tweet generator Logo" width={50} height={50} />
            Tweet Generator
          </footer>
          <p className="my-6 text-gray-500 dark:text-gray-400">Amazing AI tweet generation</p>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by <Link href="https://pablosolana.dev" className="hover:underline">Pablo Solana</Link></span>
        </div>
      </footer>
    </>
  )
}
