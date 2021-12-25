import Link from 'next/link'

const Footer = () => (
  <footer>
    <h1>
      © 2021 <span><Link href="https://www.astrolancing.com/"><a>Lance E.</a></Link></span>
    </h1>
    <h2><span><Link href="/disclaimer"><a>Disclaimer</a></Link></span></h2>
  </footer>
)

export default Footer