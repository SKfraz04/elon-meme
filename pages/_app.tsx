import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { Inter, Righteous } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={righteous.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp
