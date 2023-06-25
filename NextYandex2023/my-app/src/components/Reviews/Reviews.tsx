import { FunctionComponent } from "react"
import { Review } from "../Review/Review"

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
      {Boolean(reviews.length) &&
        reviews.map((review) => (
          <Review
            key={review.id}
            author={review.author}
            text={review.text}
            rating={review.rating}
          />
        ))}
    </div>
  )
}
