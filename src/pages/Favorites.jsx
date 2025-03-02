import "../styles/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/cards/MovieCard";
import Rating from "../utils/Rating";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length !== 0) {
    console.log(favorites);
    
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
              // movie.title.toLowerCase().includes(searchQuery) && (
              <MovieCard movie={movie} ratingFunc={Rating} key={movie.id} />
            )
            // )
          )}
        </div>
      </div>
    );
  } else
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet!</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    );
}

export default Favorites;
