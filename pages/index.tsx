import Head from 'next/head'
import { Inter } from '@next/font/google'
import  Form  from './components/form.js'
import { Main } from 'next/document.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>An Nguyen | Blog</title>
        <meta name="description" content="An Nguyen Official Blog make by NEXTJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex align-center justify-center pt-5">
        <div className="sm:w-screen rounded overflow-hidden mg-10 shadow-md p-2 flex justify-center align-center md:w-1/2 rounded overflow-hidden mg-10 shadow-md p-2 flex justify-center align-center">
          <Form/>
        </div>
      </div>
    </>
  )
}
