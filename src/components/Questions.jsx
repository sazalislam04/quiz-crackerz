import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Option from "./Option";

const Questions = ({ questions, index }) => {
  const [open, setOpen] = useState(false);
  const { correctAnswer, options, question } = questions;

  const onClickHandler = () => {
    setOpen((current) => !current);
    Swal.fire("Correct Answer", correctAnswer);
  };

  return (
    <div className="questions p-6" data-aos="zoom-in" data-aos-duration="1000">
      <div className="py-3 mb-3">
        <div className="flex items-center justify-between cursor-pointer text-blue-500">
          <h1 className="text-3xl text-gray-800 mb-2">Quiz {index + 1}</h1>
          <button onClick={onClickHandler}>
            {open ? (
              <EyeIcon className="w-6 h-6" />
            ) : (
              <EyeIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <span className=" text-xl">{question}</span>
      </div>
      <div className="p-6 mb-10 option">
        <div className="">
          {options.map((option, index) => (
            <Option key={index} option={option} correctAnswer={correctAnswer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
