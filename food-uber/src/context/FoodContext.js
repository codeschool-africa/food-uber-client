import React, { useState, createContext } from "react"

export const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState({
    loading: false,
  })
  return (
    <FoodContext.Provider value={[foods, setFoods]}>
      {children}
    </FoodContext.Provider>
  )
}
