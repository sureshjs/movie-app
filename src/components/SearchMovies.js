import React, {useState} from "react"
import Card from "./Card"

function SearchMovies() {

  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {

    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=121db08a9c1eba17614e04526031abc8&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Search</label>
      <input className="input" type="text" name="query" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
    <div className="cards-container">
      {movies.map(movie => (
        <Card key={movie.id} img={movie.poster_path} title={movie.title} />
      ))}
    </div>
    </>
  )
}

export default SearchMovies