import { FunctionComponent } from "react"

interface Props {
  reviews: {
    id: string
    author: string
    text: string
    rating: number
  }[]
}
export const Reviews: FunctionComponent<Props> = ({ reviews }) => {
  return (
    <div>
      {Boolean(reviews.length) && reviews.map((review) => (
        <div>
          <span>{review.author}</span>
          <span>{review.text}</span>
          <span>{review.rating}</span>
        </div>

      ))}
    </div>
  )
}
