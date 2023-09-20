const Header = ({ movie }) => {
  return (
    <div className="flex justify-start items-center bg-slate-600 rounded-t-lg text-white">
      <img
        className="h-64 w-48 mr-8 rounded-tl-lg"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="flex flex-col justify-between items-start">
        <h2 className="mb-4 font-bold text-3xl">{movie.Title}</h2>
        <h3 className="mb-4 text-lg">
          {movie.Released} · {movie.Runtime}
        </h3>
        <h3 className="mb-4 text-lg">{movie.Genre}</h3>
        <h3 className="mb-4 text-lg">
          <span>⭐</span> {movie.imdbRating} IMDb ({movie.imdbVotes})
        </h3>
      </div>
    </div>
  );
};
export default Header;
