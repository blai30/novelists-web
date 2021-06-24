import { NextPage } from 'next'
import { getLayout } from '../components/shared/Layout'

const Home = () => {
  return (
    <div>
      <button className="bg-green-300">
        Tailwind
      </button>
      Hello world
    </div>
  )
}

// Surround {page} with a sub-layout if desired.
Home.getLayout = (page: NextPage) => getLayout(page)

export default Home
