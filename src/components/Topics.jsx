import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div className="py-6">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
