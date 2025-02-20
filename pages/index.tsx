import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from "next/image";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import About from '../components/About';
import TokenAllocation from '../components/TokenAllocation';
import Roadmap from '../components/Roadmap';
import TokenUtility from '../components/TokenUtility';
import FAQ from '../components/FAQ';
import { Toaster } from 'react-hot-toast';
import Gallery from '../components/Gallery';
import Partners from '@/components/Partners';
import CoinDetails from '@/components/CoinDetails';
import Mission from '../components/Mission';

const geistSansFont = GeistSans.className
const geistMonoFont = GeistMono.className

const Home: NextPage = () => {
  return (
    <div className={`${geistSansFont} ${geistMonoFont}`}>
      <Head>
        <title>THE  OFFICIAL IELON</title>
        <meta name="description" content="Inspector Elon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Mission />
        <Gallery />
        <TokenAllocation />
        {/* <TokenUtility /> */}
        <CoinDetails />
        <Roadmap />
        <Partners />
        <FAQ />
      </main>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default Home
