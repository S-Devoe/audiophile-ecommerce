import Image from "next/image"
import Link from "next/link"

function Logo(): JSX.Element {
  return (
    <div className="logo">
        <Link href="/">
            <a >
                <Image src="/images/shared/desktop/logo.svg" alt="logo"
                height={24}
                width={144}
                />
            </a>
        </Link>
    </div>
  )
}
export default Logo