import Image from 'next/image'
import Loader from '@/components/Loader'
import TextSkeletor from '@/components/TextSkeletor'
import ImageSkeletor from '@/components/TextSkeletor'
import DataList from '@/components/DataList'

export default function MainSection({ handlerMagic, isLoding, imgGenerator, message, handlerTweet }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Tweet Generator</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Tweet Generator is a project to generate artificially intelligent tweets. <br />The project uses natural language processing and deep learning algorithms to generate tweets that are similar to what humans would write. <br /> The project is currently in early stages of development, but it is a promising start for automated tweet generation.</p>
          {isLoding
            ? <Loader />
            : <DataList handlerMagic={handlerMagic} />
          }
        </div>
        <div className="py-2 lg:mt-0 lg:col-span-5 lg:flex items-center flex-col gap-4">
          {
            isLoding
              ? <ImageSkeletor />
              : <Image src={imgGenerator} width={400} height={400} alt='Image create by AI' className='rounded-lg' priority={true} />
          }
          {
            isLoding
              ? < TextSkeletor />
              : <p className="text-xl font-semibold text-gray-900 dark:text-white">{message}</p>
          }
          {
            !isLoding && <button onClick={handlerTweet} className="inline-flex justify-center items-center py-3 px-5 my-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Share on Twitter!</button>
          }
        </div>
      </div>
    </section>
  )
}