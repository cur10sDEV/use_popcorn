import Rate from "../Rate";

const DetailsCard = () => {
  return (
    <>
      <div className="flex justify-start items-center bg-slate-600 rounded-t-lg text-white">
        <img
          className="w-48 mr-8 rounded-tl-lg"
          src="https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_2000x.jpg?v=1574284010"
          alt="interstellar"
        />
        <div className="flex flex-col justify-between items-start">
          <h2 className="mb-4 font-bold text-3xl">Interstellar</h2>
          <h3 className="mb-4 text-lg">7 Nov 2014 · 169 min</h3>
          <h3 className="mb-4 text-lg">Action, Adventure, Sci-Fi</h3>
          <h3 className="mb-4 text-lg">
            <span>⭐</span> 8.8 IMDb rating
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start text-white p-10">
        <Rate />
        <p className="text-lg mt-10 italic">
          Set in a dystopian future where humanity is embroiled in a
          catastrophic blight and famine, the film follows a group of astronauts
          who travel through a wormhole near Saturn in search of a new home for
          humankind.
        </p>
        <p className="text-lg mt-8 italic">
          Starring: Matthew McConaughey, Anne Hathaway, Jessica Chastain
        </p>
        <p className="text-lg mt-8 italic">Directed By: Christopher Nolan</p>
      </div>
    </>
  );
};
export default DetailsCard;
