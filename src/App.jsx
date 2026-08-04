import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setMovies(data.results || []);
    } catch {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.id === movie.id);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <h3>Loading...</h3>}

      {!loading && error && <h3>{error}</h3>}

      {!loading && !error && !hasSearched && (
        <p>Search for a movie to get started.</p>
      )}

      {!loading && !error && hasSearched && movies.length === 0 && (
        <p>No movies found.</p>
      )}

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <h2>❤️ Favorites</h2>

      <div className="movies">
        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;