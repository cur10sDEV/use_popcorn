import { Rate } from "../../Buttons";

const MovieInfo = ({ movie, setWatched, onRate, watched }) => {
  return (
    <div className="flex flex-col justify-between items-start text-white p-10">
      <Rate
        maxRating={10}
        movie={movie}
        setWatched={setWatched}
        onRate={onRate}
        watched={watched}
      />
      <p className="text-lg mt-10 italic">{movie.Plot}</p>
      <p className="text-lg mt-8 italic">Starring: {movie.Actors}</p>
      <p className="text-lg mt-8 italic">Directed By: {movie.Director}</p>
    </div>
  );
};
export default MovieInfo;
