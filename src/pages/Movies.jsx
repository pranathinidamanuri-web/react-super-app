import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import { getMovies } from "../services/moviesApi";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const categories = useStore((state) => state.categories);
  const [moviesByCategory, setMoviesByCategory] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const result = {};

      for (let cat of categories) {
        const data = await getMovies(cat);
        result[cat] = data;
      }

      setMoviesByCategory(result);
    };

    if (categories.length) fetchMovies();
  }, [categories]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: "30px" }}>
          <h2>{cat}</h2>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {moviesByCategory[cat]?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;