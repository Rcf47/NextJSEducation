"use client"
import { useCount } from "@/hooks/useCount";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import { filmDetails } from "@/app/data";

interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
  title,
  genre,
  seasonsCount
}) => {
  let { count, increment, decrement } = useCount(0)
  useEffect(() => {
    console.log(`count is ${count}`)
  }, [count])
  let filmRating: number = useMemo(() => {
    return Math.floor(filmDetails.reviews.reduce((sum, review) => {
      return sum + review.rating
    }, 0))
  }, [filmDetails.reviews])
  return (
    <div>
      <FilmInfo title={title} genre={genre} seasonsCount={seasonsCount} />
      <br />
      <p>{filmRating}</p>
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div >
  )
}
