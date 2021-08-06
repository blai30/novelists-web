import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import dayjs from 'dayjs'
import { getLayout } from '@/components/shared/Layout'
import { User } from '@/models/user'

const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get<User[]>(`${process.env.API_URI}/users`)
      setUsers(response.data)
    }

    getUsers()
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
              User
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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  <Link href={`/users/${user.id}`}>
                    {user.display_name}
                  </Link>
                </div>
                <div className="text-sm text-gray-500">
                  Email: {user.email}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {dayjs(user.created_at).format('MMMM D, YYYY')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Users.getLayout = (page: NextPage) => getLayout(page)

export default Users
