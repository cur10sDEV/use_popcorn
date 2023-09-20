import { useEffect, useState } from "react";
import { Box, MovieDetails } from "../layouts";
import { UserList } from "./";
import { Loader } from "../components/Display";

const RightBox = ({
  showMovieDetails,
  setShowMovieDetails,
  watched,
  setWatched,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=5ee8542c&i=${showMovieDetails.imdbID}`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    showMovieDetails.imdbID && fetchMovie();
  }, [showMovieDetails.imdbID]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          {!showMovieDetails.show && (
            <UserList watched={watched} setWatched={setWatched} />
          )}
          {showMovieDetails.show && (
            <MovieDetails
              setShowMovieDetails={setShowMovieDetails}
              movie={movie}
              watched={watched}
              setWatched={setWatched}
            />
          )}
        </Box>
      )}
    </>
  );
};
export default RightBox;
