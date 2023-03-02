import Link from 'next/link'
import Image from 'next/image'

export default function Footer ({ imgGenerator }) {
  return (
    <footer className='p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <div className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'>
          <Link href='/'>
            <Image src={imgGenerator} className='mr-3 h-6 sm:h-9 rounded-full' alt='Tweet generator Logo' width={50} height={50} />
          </Link>
          Tweet Generator
          <Link href='https://play.google.com/store/apps/details?id=com.tweetAIGenerator' target='_blank' rel='noreferrer'>
            <Image src='/google-play-badge.png' alt='Google play badge' width={150} height={50} />
          </Link>
        </div>
        <p className='my-6 text-gray-500 dark:text-gray-400'>Amazing AI tweet generation | BETA</p>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Developed by <Link href='https://pablosolana.dev' className='hover:underline'>Pablo Solana {' | '}</Link>
          <Link href='/privacity'>
            Privacy Policy
          </Link>
        </span>

      </div>
    </footer>
  )
}
