import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Header'
import styles from '@/styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header styles = {styles.topNav} />
    <Component {...pageProps} />
  </>
}
