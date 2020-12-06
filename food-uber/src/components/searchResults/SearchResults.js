import React, { useEffect, useState } from "react"
import axios from "axios"

import Food from "../food/Food"

const SearchResults = ({ keyword }) => {
  let [results, setResults] = useState()
  console.log(keyword)
  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const body = {
      keyword,
    }
    axios
      .post("/search", body, config)
      .then((res) => {
        // console.log(res.data)
        if (res.data) {
          setResults(res.data)
          console.log(results.results.results)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return (
    <div className="search-backdrop">
      <div className="container">
        {results && results.results && results.results.results && (
          <div className="showcase">
            {results.results.results.map(
              (name, id, food_image, description, cost) => (
                <Food
                  key={id}
                  name={name}
                  id={id}
                  food_image={food_image}
                  description={description}
                  cost={cost}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
