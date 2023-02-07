import { useState } from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { CATEGORIES } from '@/services/categories'
import createTweet from '@/services/createTweet'
import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [message, setMessage] = useState('👆👆👆 Select a category 👆👆👆')
  const [isLoading, setIsLoading] = useState(false)

  const handlerMagic = (e) => {
    e.preventDefault()
    if (e.target[0].value === '') return
    setIsLoading(true)
    createTweet(e.target[0].value)
      .then((message) => {
          setMessage(message)
          setIsLoading(false)
      })
      .catch((error) => {
        setMessage(error.message)
        setIsLoading(false)
      })
  }

  const handlerTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${message}`)
  }
  return (
    <>
      <Head>
        <title>Amazing tweet generator </title>
        <meta name="description" content="NextJS + cohere IA API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Amazing tweet&nbsp;
            <code className={styles.code}>generator</code>
          </p>
          <div>
          <label>BETA</label>
          </div>
        </div>

        <div className={styles.center}>
          <label>Select a category to get an amazing tweet!</label> <br />
          <div className={styles.thirteen}>
            {isLoading
              ? <Loader />
              : <form onSubmit={handlerMagic}>
                <datalist id="data" >
                  {
                   CATEGORIES.map((item) => {
                     return <option key={item.value} value={item.label} />
                   })
                  }
               </datalist>
               <input type="text" list="data" />
               <button>Generate!</button>
              </form>
            }
          </div>
          <div className='max-w-md	my-4'>
             <label className='gap-3'>{message}</label>
            </div>
          <button onClick={handlerTweet}>Tweet!</button>
        </div>
        <div className={styles.grid}>
          <a
            href="https://pablosolana.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tweet generator <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              By Pablo Solana | cohere IA.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
