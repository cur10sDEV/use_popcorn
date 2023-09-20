import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Navbar, Main, BoxContainer } from "./layouts";
import { MovieList, RightBox } from "./features";
import { Loader, Error } from "./components/Display";

// custom hooks
import { useMovies, useLocalStorageState, useKey } from "./hooks";

// defaults
const initialMovieDetails = {
  imdbID: "",
  show: false,
};

function App() {
  function closeMovieDetails() {
    setShowMovieDetails(initialMovieDetails);
  }
  const callback = useRef(closeMovieDetails);

  const [showMovieDetails, setShowMovieDetails] = useState(initialMovieDetails);
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query, callback.current);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  useKey("Escape", () => showMovieDetails(initialMovieDetails));

  return (
    <Main>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <BoxContainer>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList
            setShowMovieDetails={setShowMovieDetails}
            movies={movies}
          />
        )}
        {!isLoading && error && <Error msg={error} />}
        <RightBox
          showMovieDetails={showMovieDetails}
          setShowMovieDetails={setShowMovieDetails}
          watched={watched}
          setWatched={setWatched}
        />
      </BoxContainer>
    </Main>
  );
}

export default App;
