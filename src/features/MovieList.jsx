import { Card } from "../components/Cards";
import { Box } from "../layouts";
import { InlineTextInfo } from "../components/Display";

const MovieList = ({ setShowMovieDetails, movies }) => {
  return (
    <Box>
      {movies.map((movie) => {
        return (
          <Card key={movie?.imdbID} data={movie} onClick={setShowMovieDetails}>
            <InlineTextInfo data={[{ emoji: "🗓️", text: movie?.Year }]} />
          </Card>
        );
      })}
    </Box>
  );
};
export default MovieList;
