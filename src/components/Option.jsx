import React from "react";
import { toast } from "react-toastify";

const Option = ({ option, correctAnswer }) => {
  function handleOption() {
    if (option === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 1000 });
    } else {
      toast.error("Wrong Answer", { autoClose: 500 });
    }
  }

  return (
    <div onClick={handleOption} className="shadow-md">
      <div className="cursor-pointer p-3 mb-3 text-gray-900 font-medium hover:bg-blue-500 transition duration-300 hover:text-white border-2 border-blue-500 rounded">
        {option}
      </div>
    </div>
  );
};

export default Option;
