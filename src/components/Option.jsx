import React, { useRef } from "react";
import { toast } from "react-toastify";

const Option = ({ option, correctAnswer }) => {
  const radioBtn = useRef();

  function handleOption() {
    if (option === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 1000 });
    } else {
      toast.error("Wrong Answer", { autoClose: 500 });
    }
    radioBtn.current.focus();
  }

  return (
    <div
      onClick={handleOption}
      className="shadow-md"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      <div className="cursor-pointer p-3 mb-3 text-gray-900 font-medium hover:bg-blue-500 transition duration-300 hover:text-white border-2 border-blue-500 rounded">
        <input value={option} type="checkbox" className="mr-2" ref={radioBtn} />
        {option}
      </div>
    </div>
  );
};

export default Option;
