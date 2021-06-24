import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: NextPage) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
