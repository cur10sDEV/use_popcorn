import { useEffect, useState } from "react";

const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const data = JSON.parse(localStorage.getItem(key));
    return data ? data : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
export default useLocalStorageState;
