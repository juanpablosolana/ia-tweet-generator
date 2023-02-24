import Image from 'next/image'
import Link from 'next/link'

export default function Header ({ imgGenerator }) {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl sm:flex'>
          <Link href='/'>
            <Image src={imgGenerator} className='mr-3 h-6 sm:h-9 rounded-full' alt='Tweet generator Logo' width={50} height={50} />
          </Link>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Tweet Generator | BETA</span>
        </div>
      </nav>
    </header>
  )
}
