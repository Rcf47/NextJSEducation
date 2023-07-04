import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex justify-center">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
