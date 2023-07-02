'use client'
import { usePathname } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header
          {pathname !== '/' && <Link href='/'>Main</Link>}
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
