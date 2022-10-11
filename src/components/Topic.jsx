import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
const Topic = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="flex flex-col p-4 lg:p-6 space-y-6 overflow-hidden rounded-md shadow-md bg-gray-100">
      <div>
        <img
          src={logo}
          alt=""
          className="object-cover hover:scale-105 hover:transition duration-300  shadow-md w-full mb-4 h-72 bg-gray-500"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <h2 className="text-xl font-medium">{name}</h2>
        </div>
        <div className="">
          <button
            type="button"
            className="flex items-center px-4 py-1 rounded text-white bg-blue-500 text-xl"
          >
            Start Quiz
            <span className="ml-1">
              <PlayIcon className="h-6 w-6" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
