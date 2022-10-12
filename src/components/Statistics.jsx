import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "React",
    total: 8,
    id: 1,
  },
  {
    name: "JavaScript",
    total: 9,
    id: 2,
  },
  {
    name: "CSS",
    total: 8,
    id: 3,
  },
  {
    name: "Git",
    total: 11,
    id: 4,
  },
];
const Statistics = () => {
  return (
    <div className="flex justify-center w-full lg:w-9/12 mx-auto pt-16">
      <div
        style={{ width: "100%", height: 400 }}
        className="container mx-auto w-full"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <ResponsiveContainer>
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="id"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
