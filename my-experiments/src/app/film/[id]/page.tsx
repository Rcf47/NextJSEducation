export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>{`Film id is ${params.id}`}</div>
  )
}
