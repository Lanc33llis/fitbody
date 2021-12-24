import Link from 'next/link'

const Header = () => (
  <header>
    <h1>
      <Link href="/">
        <a>
          fitbody
        </a>
      </Link>
    </h1>
    <div/>
    <nav>
      <Link href="/test">
        <a>test</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
  </header>
)

export default Header