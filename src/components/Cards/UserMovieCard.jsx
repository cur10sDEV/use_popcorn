import { Card } from "./";
import { CircularButton } from "../Buttons";
import { InlineTextInfo } from "../Display";

const UserMovieCard = ({ movie, onDelete }) => {
  const data = [
    {
      emoji: "🌟",
      text: movie.userRating,
    },
    {
      emoji: "⭐",
      text: movie.imdbRating,
    },
    {
      emoji: "⏳",
      text: movie.Runtime,
    },
  ];
  return (
    <Card styles="relative" data={movie}>
      <InlineTextInfo data={data} />
      <CircularButton onClick={onDelete} styles="right-2 top-12 bg-red-600">
        ⮿
      </CircularButton>
    </Card>
  );
};
export default UserMovieCard;
