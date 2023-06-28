import { FunctionComponent } from "react";
import styles from '../../app/styles.module.css'

interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonsCount: number;
}
export const FilmInfo: FunctionComponent<Props> = ({ title, genre, seasonsCount }) => {
  return (
    <>
      <p className={styles.title}>{title || "Unknown Film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>
    </>
  )
}
