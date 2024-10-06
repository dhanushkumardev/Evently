import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col gap-5 items-center sm:flex-row sm:flex-between">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
        />
        </Link>
        <p>2023 Evently. All Rights reserved.</p> 
      </div>
    </footer>
  )
}

export default Footer