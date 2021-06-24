import { NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Layout, { getLayout } from '../components/shared/Layout'

const Home = () => {
  return (
    <>
      <button className="bg-green-300">
        Tailwind
      </button>
      Hello world
    </>
  )
}

// Surround {page} with a sub-layout if desired.
Home.getLayout = (page: NextPage) => getLayout(page)

export default Home
