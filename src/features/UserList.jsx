import { Stats, UserMovieCard } from "../components/Cards";

const UserList = ({ watched, setWatched }) => {
  const handleDelete = (id) => {
    setWatched((prev) => {
      return prev.filter((item) => item.imdbID !== id);
    });
  };
  return (
    <div className="bg-slate-700 rounded-lg overflow-y-scroll relative">
      <Stats watched={watched} />
      {watched.map((item) => (
        <UserMovieCard
          key={item.imdbID}
          movie={item}
          onDelete={() => handleDelete(item.imdbID)}
        />
      ))}
    </div>
  );
};
export default UserList;
