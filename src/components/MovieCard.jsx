function MovieCard({ movie, favorites, toggleFavorite }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.title} />

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>
          <strong>Release:</strong> {movie.release_date || "Unknown"}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {movie.vote_average}
        </p>

        <p>
          {movie.overview
            ? movie.overview.substring(0, 150) + "..."
            : "No description available."}
        </p>

        <button onClick={() => toggleFavorite(movie)}>
          {isFavorite ? "💔 Remove Favorite" : "❤️ Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;