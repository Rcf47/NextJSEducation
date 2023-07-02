"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <h1>Hello</h1>
      <Link href="/selection">Selection is here</Link>
      <br />
      <button type='button' onClick={() => router.push('/selection')}>Click here let&apos;s go to selection</button>
    </>
  )
}
