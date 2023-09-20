const Card = ({ children, onClick, styles, data }) => {
  return (
    <div
      className={`flex justify-start items-center hover:bg-gray-800 border-b-2 border-gray-500 text-white py-4 px-8 rounded-lg cursor-pointer styles ${styles}`}
      onClick={() =>
        onClick &&
        onClick((prev) => {
          const isOpen = data?.imdbID === prev.imdbID;
          return {
            imdbID: isOpen ? "" : data?.imdbID,
            show: isOpen ? false : true,
          };
        })
      }
    >
      <img className="h-24 w-16 mr-8" src={data?.Poster} alt={data?.Title} />
      <div className="">
        <h2 className="font-bold text-xl mb-4">{data?.Title}</h2>
        {children}
      </div>
    </div>
  );
};
export default Card;
