import React from "react"
import { filmDetails } from "./data"
import { FilmDetails } from "@/components/FilmDetails/FilmDetails"
import { Reviews } from "@/components/Reviews/Reviews"
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm"

export default function Home() {
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
      <Reviews reviews={filmDetails.reviews} />
      <NewReviewForm />
      <footer />
    </div>
  )
}
