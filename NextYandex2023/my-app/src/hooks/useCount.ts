import { useCallback, useState } from "react";

export function useCount(initialValue: number = 0) {
  let [count, setCount] = useState(initialValue)
  const increment = useCallback(() => {
    setCount((currentValue) => currentValue + 1)
  }, [])
  const decrement = useCallback(() => {
    setCount((currentValue) => currentValue - 1)
  }, [])
  return { count, decrement, increment }
}
