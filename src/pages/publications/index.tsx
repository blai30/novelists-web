import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import dayjs from 'dayjs'
import { getLayout } from '@/components/shared/Layout'
import { Publication } from '@/models/publication'

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const getPublications = async () => {
      const response = await axios.get<Publication[]>(`${process.env.API_URI}/publications`)
      setPublications(response.data)
    }

    getPublications()
  }, [])

  return (
    <div className="flex flex-col">
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Series
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Synopsis
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publications.map((publication) => (
            <tr key={publication.id}>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  <Link href={`/publications/${publication.id}`}>
                    {publication.title}
                  </Link>
                </div>
                <div className="text-sm text-gray-500">
                  User: {publication.user.display_name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {publication.synopsis}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {dayjs(publication.created_at).format('MMMM D, YYYY')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Publications.getLayout = (page: NextPage) => getLayout(page)

export default Publications
