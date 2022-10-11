// import Lottie from "lottie-react";
import React from "react";
// import header from "../assets/header.json";
const Home = () => {
  return (
    <div className="">
      <div className="container lg:gap-8 flex flex-col justify-center mx-auto p-6 lg:py-10 lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-semibold uppercase text-gray-800">
            <span className="text-blue-500">Quiz</span> yourself on Coding!
          </h1>
          <p className="mt-6 text-lg md:mb-16">
            Find out which careers, languages, and courses suit your personal
            interests and strengths best.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:mt-10 lg:mt-0 h-full md:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* <Lottie animationData={header} loop={true} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
