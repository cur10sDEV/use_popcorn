import TextInfo from "./TextInfo";

const InlineTextInfo = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      {data.map((item, i) => (
        <TextInfo key={i} emoji={item.emoji} text={item.text} />
      ))}
    </div>
  );
};
export default InlineTextInfo;
