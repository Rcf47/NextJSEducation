import Link from "next/link"

export const Header = () => {
  return (
    <header className="">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
