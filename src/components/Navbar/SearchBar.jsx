import { useRef } from "react";
import { useKey } from "../../hooks";

const SearchBar = ({ styles, query, setQuery }) => {
  // using useRef
  // refs are used when value remains same b/w renders
  // or for storing DOM elements
  const inputEl = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className={`font-medium text-xl bg-violet-500 px-4 py-3 outline-none placeholder:text-white placeholder:text-opacity-70 w-4/12 rounded-lg ${styles}`}
      type="text"
      name="query"
      id="query"
      placeholder="Search movies..."
      value={query}
      onChange={handleChange}
      ref={inputEl}
    />
  );
};

export default SearchBar;
