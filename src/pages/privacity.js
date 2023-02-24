import { imageDefaultUrl } from '@/constant'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeadSEO from '@/components/Head'
import Privacity from '@/components/Privacity'

export default function Home () {
  const imgGenerator = (imageDefaultUrl)

  return (
    <>
      <HeadSEO
        title='Privacy Policy'
        description='Privacy Policy'
      />
      <Header imgGenerator={imgGenerator} />
      <Privacity />
      <Footer imgGenerator={imgGenerator} />
    </>
  )
}
