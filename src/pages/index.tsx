import { NextPage } from 'next'
import { getLayout } from '@/components/shared/Layout'

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

// Surround {page} with a sub-layout if desired.
Home.getLayout = (page: NextPage) => getLayout(page)

export default Home
