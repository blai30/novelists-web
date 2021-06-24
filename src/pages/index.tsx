import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/shared/Layout'

const Home = () => {
  return (
    <Layout>
      <button className="bg-green-300">
        Tailwind
      </button>
      Hello world
    </Layout>
  )
}

export default Home
