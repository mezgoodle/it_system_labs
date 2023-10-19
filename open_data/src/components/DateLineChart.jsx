import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DateLineChart = ({ data }) => {
  const resultArray = data.map((item) => {
    const theftDate = new Date(item.THEFT_DATA);
    const insertDate = new Date(item.INSERT_DATE);
    const timeDifference = insertDate - theftDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return {
      daysDifference,
    };
  });
  return (
    <LineChart
      width={500}
      height={300}
      data={resultArray}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="daysDifference"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default DateLineChart;
