import { FunctionComponent } from "react";
import styles from '../../app/styles.module.css'

interface Props {

  author: string
  text: string
  rating: number
}

export const Review: FunctionComponent<Props> = ({ text, author, rating }) => {
  return (
    <div >
      <span className={styles.author}>{author}</span><br />
      <span className={styles.text}>{text}</span><br />
      <span>{rating}</span><br />
    </div>

  )
}


