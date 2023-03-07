import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-sm text-red-300 font-semibold underline">
      Hello world!
    </h1>
  )
}
