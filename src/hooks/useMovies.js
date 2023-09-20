import { useState, useEffect } from "react";

const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    callback?.();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }&s=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (data.Response === "False") {
          if (data.Error === "Incorrect IMDb ID.") {
            if (query.length > 0) {
              setError("Movie not found!");
            } else {
              setError(null);
            }
          } else {
            setError(data.Error);
          }
        } else {
          setMovies(data.Search);
          setError(null);
        }
      } catch (err) {
        if (err.message === "The operation was aborted") {
          setIsLoading(true);
        }
      } finally {
        setIsLoading(false);
      }
    }
    query.length >= 3 ? fetchMovies() : setMovies([]);

    return () => {
      controller.abort();
      setError(null);
    };
  }, [query, callback]);

  return { movies, isLoading, error };
};

export default useMovies;
