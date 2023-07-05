import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NextJS"
}
export default function About() {
  return (
    <>
      <h1 className="mb-4 text-4xl">This is about page</h1>
      <Link href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800">To app root</Link>
    </>
  )
}
