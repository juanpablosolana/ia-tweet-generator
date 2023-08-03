import { useState } from 'react'
import createTweet from '@/services/createTweet'
import { logo } from '@/constant'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import HeadSEO from '@/components/Head'
import AdBanner from '@/components/AdBanner'

export default function Home () {
  const [message, setMessage] = useState('Tweet generator')
  const [isLoding, setIsLoading] = useState(false)
  const [imgGenerator, setImgGenerator] = useState(logo)

  const handlerMagic = (e) => {
    e.preventDefault()
    const { value } = e.target[0]
    if (value === '') return
    setIsLoading(true)
    Promise.all([
      createTweet('tweet', value),
      createTweet('image', value)
    ])
      .then(([message, imgGenerator]) => {
        setMessage(message)
        setImgGenerator(imgGenerator)
      })
      .catch((error) => {
        setMessage('Error, IA timeout or invalid category', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handlerTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${message}&&image=${imgGenerator}`)
  }

  return (
    <>
      <HeadSEO />
      <Header />
      <MainSection
        imgGenerator={imgGenerator}
        isLoding={isLoding}
        message={message}
        handlerMagic={handlerMagic}
        handlerTweet={handlerTweet}
      />
      <AdBanner
        data-ad-slot='2296264031'
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
      <Footer />
    </>
  )
}
