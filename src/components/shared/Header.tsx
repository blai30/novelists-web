import Link from 'next/link'

const Header = () => {
  return (
    <header id="header" className="w-full bg-blue-300">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/browse">
        <a>Browse</a>
      </Link>
    </header>
  )
}

export default Header
