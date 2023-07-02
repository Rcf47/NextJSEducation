import Link from "next/link"

export default function FilmSelection({ params }: { params: { id: number } }) {
  return (
    <>
      <div>Film selection</div>
      {[1, 2, 3].map((id, index) => <Link href={`film/${id}`} key={index}>{`Film ${id}`}</Link>)}
    </>
  )
}
