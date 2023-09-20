import { useState } from "react";
import { CircularButton } from "../components/Buttons";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box bg-slate-700 rounded-lg overflow-y-scroll relative">
      {isOpen && children}
      <CircularButton
        onClick={() => setIsOpen((prev) => !prev)}
        styles="right-2 top-2"
      >
        {isOpen ? "-" : "+"}
      </CircularButton>
    </div>
  );
};
export default Box;
