import Lottie from "lottie-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import header from "../assets/header.json";
import Topic from "./Topic";
const Home = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div className="py-6">
      <div className="container lg:gap-8 flex flex-col justify-center mx-auto p-6 lg:py-4 lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-semibold uppercase text-gray-800">
            <span className="text-blue-500">Quiz</span> yourself on Coding!
          </h1>
          <p className="mt-6 text-lg">
            Find out which careers, languages, and courses suit your personal
            interests and strengths best.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <Lottie animationData={header} loop={true} />
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
