import { useEffect, useState } from "react";
import { Button } from "./";

const Rate = ({
  maxRating = 5,
  color = "#e4c30e",
  size = "28",
  className = "",
  movie,
  setWatched,
  watched,
  onRate,
}) => {
  const defaultStyles = {
    fontSize: `${size}px`,
    color: `${color} `,
  };

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const [watchedUserRating, setWatchedUserRating] = useState(0);

  const handleAddWatch = () => {
    const movieToAdd = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      imdbRating: movie.imdbRating,
      Runtime: movie.Runtime,
      userRating: rating,
    };
    setWatched((prev) => {
      return [...prev, movieToAdd];
    });
    onRate();
  };
  useEffect(() => {
    setIsWatched(watched.map((item) => item.imdbID).includes(movie.imdbID));
    setWatchedUserRating(
      watched.find((item) => item.imdbID === movie.imdbID)?.userRating
    );
  }, []);

  return (
    <div className="bg-slate-600 py-6 px-8 rounded-lg w-full">
      {isWatched && (
        <h3>
          You rated this movie <span>🌟</span> {watchedUserRating}
        </h3>
      )}
      {!isWatched && (
        <>
          <h3 style={defaultStyles} className={`mx-2 mb-4${className}`}>
            {Array.from({ length: maxRating }, (_, i) => (
              <span
                style={{ fontSize: `${size * 1.25}px` }}
                role="button"
                className="mr-1"
                key={i}
                value={i + 1}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setTempRating(i + 1)}
                onMouseLeave={() => setTempRating(0)}
              >
                {tempRating
                  ? i + 1 <= tempRating
                    ? "★"
                    : "☆"
                  : i + 1 <= rating
                  ? "★"
                  : "☆"}
              </span>
            ))}
            <span className="ml-2">{tempRating || rating || ""}</span>
          </h3>
          {rating >= 1 && (
            <Button onClick={handleAddWatch}>+ Add to list</Button>
          )}
        </>
      )}
    </div>
  );
};
export default Rate;
