import { NextPage } from 'next'
import Link from 'next/link'
import { getLayout } from '@/components/shared/Layout'

const Login = () => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="email">
        Email
        <input id="email" type="email" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" type="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

Login.getLayout = (page: NextPage) => getLayout(page)

export default Login
