import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<meta name="description" content="Developer Blog Offical Website" />
				<meta name="keywords" content="IT,Blog,Nextjs,Website, An Nguyen" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="country" content="Viet Name" />
				<link rel="icon" href="/favicon.ico" />
				<title>An Nguyen Blog</title>
			</Head>
			<main className={styles.main}>
        		<h1 className="text-center text-3xl font-bold underline">Hello, Welcome to An Nguyen Blog</h1>
			</main>
    	</>
	)
}
