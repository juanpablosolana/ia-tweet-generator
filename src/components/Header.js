import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/constant'

export default function Header () {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-4  dark:bg-gray-800 flex flex-wrap justify-between items-center '>
        <Link href='/'>
          <Image src={logo} className='rounded-full' alt='Tweet generator Logo' width={50} height={250} />
        </Link>
        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Tweet Generator | BETA</span>
      </nav>
    </header>
  )
}
