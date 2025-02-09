import MovieCard from "../components/MovieCard"

function Home() {
  const movies = [
    {id:1, title: "John Wick", release_date: "2010"},
    {id:2, title: "Mr. Bean", release_date: "2022"},
    {id:3, title: "The Matrix", release_date: "2026"},
  ];

  const handleSearch = () => {}

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for the movies..." className="search-input"/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id}/> )}
      </div>
    </div>
  )
}

export default Home