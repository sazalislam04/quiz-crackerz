import {
  Bars3BottomRightIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  QueueListIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../img/crossword.png";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <nav className=" py-5 shadow-md">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img className="w-10 h-10" src={img} alt="" />
            <span className="ml-2 text-2xl font-semibold ">
              sTwist<span className="text-blue-500">Quiz</span>
            </span>
          </Link>

          <ul className="lg:flex items-center gap-8 text-lg text-gray-800 hidden">
            <li>
              <NavLink
                to="/"
                end
                className={`flex items-center ${({ isActive }) =>
                  isActive ? "active" : undefined}`}
              >
                <span className="mr-2">
                  <HomeIcon className="h-5 w-5 text-blue-500" />
                </span>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topics"
                className={`flex items-center ${({ isActive }) =>
                  isActive ? "active" : undefined}`}
              >
                <span className="mr-2">
                  <QueueListIcon className="h-5 w-5 text-blue-500" />
                </span>
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={`flex items-center ${({ isActive }) =>
                  isActive ? "active" : undefined}`}
              >
                <span className="mr-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-500" />
                </span>{" "}
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={`flex items-center ${({ isActive }) =>
                  isActive ? "active" : undefined}`}
              >
                <span className="mr-2">
                  <ChatBubbleBottomCenterIcon className="h-5 w-5 text-blue-500" />
                </span>{" "}
                Blog
              </NavLink>
            </li>
          </ul>
          <div
            onClick={() => setMenuBar(!menuBar)}
            className="h-8 w-8 cursor-pointer text-gray-900 lg:hidden"
          >
            {menuBar ? (
              <XMarkIcon className="text-red-500" />
            ) : (
              <Bars3BottomRightIcon />
            )}
          </div>
        </div>
      </nav>
      {menuBar && (
        <ul className="p-5 lg:hidden text-lg text-gray-800 z-10 w-9/12 bg-gray-50 shadow-md mx-auto -mt-4 rounded">
          <li className="mb-2">
            <NavLink
              to="/"
              className={`flex items-center ${({ isActive }) =>
                isActive ? "active" : undefined}`}
              end
            >
              <span className="mr-2">
                <HomeIcon className="h-5 w-5 text-blue-500" />
              </span>
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/topics"
              className={`flex items-center ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <span className="mr-2">
                <QueueListIcon className="h-5 w-5 text-blue-500" />
              </span>
              Topics
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/statistics"
              className={`flex items-center ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <span className="mr-2">
                <ChartBarIcon className="h-5 w-5 text-blue-500" />
              </span>
              Statistics
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/blog"
              className={`flex items-center ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <span className="mr-2">
                <ChatBubbleBottomCenterIcon className="h-5 w-5 text-blue-500" />
              </span>
              Blog
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
