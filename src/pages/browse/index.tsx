import { NextPage } from 'next'
import { getLayout } from '@/components/shared/Layout'

const Browse = () => {
  return (
    <div>
      Browse
    </div>
  )
}

Browse.getLayout = (page: NextPage) => getLayout(page)

export default Browse
