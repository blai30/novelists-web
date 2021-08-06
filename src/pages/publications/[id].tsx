import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getLayout } from '@/components/shared/Layout'
import { Chapter } from '@/models/chapter'
import { Publication } from '@/models/publication'

const PublicationPage = () => {
  const router = useRouter()
  const [publication, setPublication] = useState<Publication>()
  const [chapters, setChapters] = useState<Chapter[]>([])

  useEffect(() => {
    const getPublication = async () => {
      const response = await axios.get<Publication>(`${process.env.API_URI}/publications/${router.query.id}`)
      setPublication(response.data)
    }

    // const getChapters = async () => {
    //   const response = await axios.get<Chapter[]>(`${process.env.API_URI}/chapters?publication_id=${router.query.id}`)
    //   setChapters(response.data)
    // }

    getPublication()
  }, [router.query.id])

  return (
    <div className="prose">
      Publication Page
      {publication &&
      <h2>
        {publication.title}
      </h2>}
      <ul>
        Chapters
        <li></li>
      </ul>
    </div>
  )
}

PublicationPage.getLayout = (page: NextPage) => getLayout(page)

// export const getStaticPaths = async () => {
//   const response = await axios.get<Publication[]>(`${process.env.API_URI}/publications`)
//   const data = await response.data
// }

export default PublicationPage
