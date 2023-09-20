import { Logo, SearchBar, NumResults } from "../components/Navbar";

const Navbar = ({ movies, query, setQuery }) => {
  return (
    <div className="flex justify-between items-center bg-violet-600 text-white px-8 py-4 mb-8 rounded-lg">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
      <NumResults nums={movies.length} />
    </div>
  );
};
export default Navbar;
