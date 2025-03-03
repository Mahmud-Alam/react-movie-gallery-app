import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api"; // API call
import { titleToSlug } from "../utils/slugify";
import "../styles/MovieDetails.css";

function MovieDetails() {
  const { slug } = useParams(); // Get slug from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies(); // Fetch movies from API
        const matchedMovie = movies.find((m) => titleToSlug(m.title) === slug);

        if (matchedMovie) {
          setMovie(matchedMovie);
        } else {
          setError("Movie not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="movie-details">
      <div
        className="backdrop"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
      >
        <div className="overlay">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="release-date">Release Date: {movie.release_date}</p>
        </div>
      </div>

      <div className="content">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="details">
          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <div className="genres">
            {movie.genre_ids.map((id) => (
              <span key={id} className="genre-badge">Genre {id}</span>
            ))}
          </div>

          <div className="ratings">
            <p>⭐ {movie.vote_average.toFixed(1)} / 10</p>
            <p>Votes: {movie.vote_count}</p>
            <p>Popularity: {movie.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
