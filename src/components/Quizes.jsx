import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quizes = () => {
  const quizes = useLoaderData().data;
  const { questions, name } = quizes;
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-4xl  text-center font-medium text-blue-500">
          Quiz of {name}
        </h2>
        <div className="w-9/12 mx-auto py-8">
          {questions.map((questions, index) => (
            <Questions key={questions.id} questions={questions} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
