"use client"
import React from "react"
import { filmDetails } from "./data"
import { FilmDetails } from "@/components/FilmDetails/FilmDetails"
import { Reviews } from "@/components/Reviews/Reviews"
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm"

const initialValue = 'notWorld'
export const ThemeContext = React.createContext({})
export default function Home() {
  return (
    <ThemeContext.Provider value='hello world'>
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
    </ThemeContext.Provider>
  )
}
