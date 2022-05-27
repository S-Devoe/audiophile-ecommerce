import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

function NavLinks(): JSX.Element {
    const [active, setActive] = useState(true)
    const {asPath} = useRouter()
    // console.log(asPath)
  return (
    <nav className="nav-links">
      <ul className="nav_list">
        <li className={`${asPath === "/" ? "active" : null}`}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={`${asPath === "/headphones" ? "active" : null}`}>
          <Link href="/headphones">
            <a>Headphones</a>
          </Link>
        </li>
        <li className={`${asPath === "/speakers" ? "active" : null}`}>
          <Link href="/speakers">
            <a>Speakers</a>
          </Link>
        </li>
        <li className={`${asPath === "/earphones" ? "active" : null}`}>
          <Link href="/earphones">
            <a>Earphones</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavLinks