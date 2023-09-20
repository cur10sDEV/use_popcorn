const TextInfo = ({ emoji, text }) => {
  return (
    <h3 className="mr-8 font-bold">
      <span>{emoji}</span>
      {" " + text}
    </h3>
  );
};
export default TextInfo;
