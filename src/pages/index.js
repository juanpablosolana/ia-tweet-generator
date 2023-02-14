import { useState } from 'react'
import createTweet from '@/services/createTweet'
import { imageDefaultUrl } from '@/constant'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import HeadSEO from '@/components/Head'

export default function Home () {
  const [message, setMessage] = useState('Tweet generator')
  const [isLoding, setIsLoading] = useState(false)
  const [imgGenerator, setImgGenerator] = useState(imageDefaultUrl)

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
      <Header imgGenerator={imgGenerator} />
      <MainSection
        imgGenerator={imgGenerator}
        isLoding={isLoding}
        message={message}
        handlerMagic={handlerMagic}
        handlerTweet={handlerTweet}
      />
      <Footer imgGenerator={imgGenerator} />
    </>
  )
}
