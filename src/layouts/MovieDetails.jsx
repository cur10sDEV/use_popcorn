import { useEffect } from "react";
import { CircularButton } from "../components/Buttons";
import { Header, MovieInfo } from "../components/Cards/MovieDetails";

const MovieDetails = ({ movie, setShowMovieDetails, setWatched, watched }) => {
  const showStats = () => {
    setShowMovieDetails(() => ({ imdbID: "", show: false }));
  };

  useEffect(() => {
    document.title = `Movie | ${movie?.Title}`;

    return () => (document.title = "usePopcorn");
  }, []);

  return (
    <>
      <CircularButton onClick={showStats} styles="left-2 top-2">
        ←
      </CircularButton>
      <Header movie={movie} />
      <MovieInfo
        movie={movie}
        setWatched={setWatched}
        onRate={showStats}
        watched={watched}
      />
    </>
  );
};
export default MovieDetails;
