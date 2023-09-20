const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-violet-600 w-full p-2 rounded-full font-bold text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
