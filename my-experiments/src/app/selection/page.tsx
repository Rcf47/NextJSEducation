'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Selection() {
  const router = useRouter()
  return (
    <>
      <h2>title</h2>
      <div>Little selection here</div>
      <Link href='/'>Back</Link>
      <br />
      <button type='button' onClick={() => router.push('/')}>Back with router</button>
      <Link href='/film/123'>Film</Link>
      {[1, 2, 3].map((id, index) => { <Link href={`film/${id}`} key={index}>{`Film ${id}`}</Link> })}
    </>
  )
}
