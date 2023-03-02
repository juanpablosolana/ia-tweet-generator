import Link from 'next/link'
import Image from 'next/image'

export default function Footer () {
  return (
    <footer className='bg-white md:p-8 lg:p-4 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <p className='my-2 text-gray-500 dark:text-gray-400'>Amazing AI tweet generatior | BETA</p>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Developed by <Link href='https://pablosolana.dev' className='hover:underline'>Pablo Solana {' | '}</Link>
          <Link href='/privacity' className='hover:underline'>
            Privacy Policy
          </Link>
        </span>
        <div className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'>
          <Link href='https://play.google.com/store/apps/details?id=com.tweetAIGenerator' target='_blank' rel='noreferrer'>
            <Image src='/google-play-badge.png' alt='Google play badge' width={150} height={50} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
