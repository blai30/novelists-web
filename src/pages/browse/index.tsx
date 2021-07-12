import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { getLayout } from '@/components/shared/Layout'
import { Publication } from '@/models/publication'

const Browse = () => {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const getPublications = async () => {
      const response = await axios.get<Publication[]>(`${process.env.API_URI}/publications`)
      setPublications(response.data)
    }

    getPublications()
  }, [])

  console.log(publications);

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
                  <Link href={`${publication.id}`}>
                    {publication.title}
                  </Link>
                </div>
                <div className="text-sm text-gray-500">
                  User ID: {publication.user_id}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {publication.synopsis}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit"
                }).format(new Date(publication.created_at))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Browse.getLayout = (page: NextPage) => getLayout(page)

export default Browse
