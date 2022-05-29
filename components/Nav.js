import Link from 'next/link'

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/users/addblog">
          <a>Blogs</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar