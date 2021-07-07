import '@/styles/globals.css'
import { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: NextPage) => page)
  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
