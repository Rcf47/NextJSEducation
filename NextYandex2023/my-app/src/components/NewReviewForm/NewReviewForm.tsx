"use client"
import { FunctionComponent, useCallback, useReducer } from "react"

export const NewReviewForm: FunctionComponent = () => {
  const setFocus = useCallback((element) => { element.focus }, [])
  const FORM_ACTIONS = {
    setName: "setName",
    setText: "setText",
    setRating: "setRating",
  }
  const initialState = {
    name: "Vadim",
    text: "text",
    rating: 10,
  }
  const reducer = (state, action) => {
    switch (action?.type) {
      case FORM_ACTIONS.setName:
        return { name: action.payload.name, text: "", rating: 0 }
      case FORM_ACTIONS.setText:
        return { ...state, text: action.payload.text }
      case FORM_ACTIONS.setRating:
        return { ...state, rating: action.payload.rating }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const onNameChange = (event) =>
    dispatch({
      type: FORM_ACTIONS.setName,
      payload: { name: event.target.value },
    })
  const onTextChange = (event) =>
    dispatch({
      type: FORM_ACTIONS.setText,
      payload: { text: event.target.value },
    })
  const onRatingChange = (event) => dispatch({ type: FORM_ACTIONS.setRating, payload: { rating: event.target.value } })
  return (
    <div>
      <label>
        Name:
        <input ref={setFocus} value={state.name} onChange={onNameChange} type="text" />
      </label>
      <label>
        Text:
        <input value={state.text} onChange={onTextChange} type="text" />
      </label>
      <label>
        Rating:
        <input value={state.rating} onChange={onRatingChange} type="number" />
      </label>
    </div>
  )
}
