const CircularButton = ({ children, onClick, styles }) => {
  return (
    <div
      className={`bg-slate-900 flex justify-center items-center rounded-full w-8 h-8 absolute z-50 ${styles}`}
      onClick={onClick}
    >
      <button className="text-2xl text-white">{children}</button>
    </div>
  );
};
export default CircularButton;
