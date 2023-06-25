import { FunctionComponent } from "react";

interface Props {

  author: string
  text: string
  rating: number
}

export const Review: FunctionComponent<Props> = ({ text, author, rating }) => {
  return (
    <div >
      <span>{author}</span><br />
      <span>{text}</span><br />
      <span>{rating}</span><br />
    </div>

  )
}


