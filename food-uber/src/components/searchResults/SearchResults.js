import React, { useEffect, useState } from "react"
import axios from "axios"

import Food from "../food/Food"
import Search from "../search/Search"
import "./searchResults.sass"

const SearchResults = ({ keyword }) => {
  let [results, setResults] = useState()
  let [loading, setLoading] = useState(false)
  let [close, setClose] = useState(false)
  console.log(keyword, close)
  const closeModal = () => {
    setClose(true)
  }
  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const body = {
      keyword,
    }
    setLoading(true)
    axios
      .post("/search", body, config)
      .then((res) => {
        // console.log(res.data)
        if (res.data) {
          setResults(res.data)
          //   console.log(results.results)
          setLoading(false)
          //   console.log(results.results.results)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [setResults, setLoading, keyword])
  return (
    <div className="search-results">
      <div className="search-backdrop" onClick={closeModal}></div>
      <div className="search-container">
        <Search />
        <h2>You Searched For {keyword}</h2>
        {loading ? (
          <h2>Searching...</h2>
        ) : (
          <>
            {results && results.results && (
              <div className="showcase">
                {results.results.map(
                  ({ name, id, food_image, description, cost }) => (
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
          </>
        )}
      </div>
    </div>
  )
}

export default SearchResults
