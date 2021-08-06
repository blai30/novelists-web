import Link from 'next/link'
import DarkToggle from '@/components/DarkToggle'

const Header = () => {
  return (
    <header id="header" className="inline-flex items-center w-full bg-blue-300">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/publications">
        <a>Publications</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <DarkToggle />
    </header>
  )
}

export default Header
