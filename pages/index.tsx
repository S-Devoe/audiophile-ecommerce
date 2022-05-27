import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/templates/HomePage'

const Home: NextPage = () => {
  
  return (
    <main>
      <Head>
        <title>Audiophile Shop</title>
      </Head>
      <HomePage />
    </main>
         
  )
}

export default Home
