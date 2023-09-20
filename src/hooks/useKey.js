import { useEffect } from "react";

const useKey = (key, action) => {
  useEffect(() => {
    const closeCallback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", closeCallback);

    return () => document.removeEventListener("keydown", closeCallback);
  }, [key, action]);
};

export default useKey;
