import { useEffect, useState } from "react";
import { InlineTextInfo } from "../Display";

const initialData = [
  { emoji: "#️⃣", text: "0 Movies" },

  {
    emoji: "🌟",
    text: "0.0",
  },
  {
    emoji: "⭐",
    text: "0.0",
  },
  {
    emoji: "⏳",
    text: "0 min",
  },
];

const Stats = ({ watched }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (watched.length > 0) {
      let imdbRating = 0;
      let userRating = 0;
      let runtime = 0;
      let noOfMovies = watched.length;
      watched.map((item) => {
        imdbRating += Number(item.imdbRating);
        userRating += Number(item.userRating);
        runtime += Number(item.Runtime.split(" ")[0]);
      });
      setData([
        { emoji: "#️⃣", text: `${noOfMovies}` },

        {
          emoji: "🌟",
          text: `${(userRating / noOfMovies).toFixed(1)}`,
        },
        {
          emoji: "⭐",
          text: `${(imdbRating / noOfMovies).toFixed(1)}`,
        },
        {
          emoji: "⏳",
          text: `${runtime} min`,
        },
      ]);
    } else {
      setData(initialData);
    }
  }, [watched]);

  return (
    <div className="flex flex-col justify-start bg-slate-600 shadow-lg text-white py-6 px-10 rounded-lg">
      <h2 className="font-bold text-xl mb-2">MOVIES YOU WATCHED</h2>
      <InlineTextInfo data={data} />
    </div>
  );
};
export default Stats;
