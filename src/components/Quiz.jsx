import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const topics = useLoaderData().data;
  console.log(topics);

  return (
    <div>
      <h1>quiz</h1>
    </div>
  );
};

export default Quiz;
