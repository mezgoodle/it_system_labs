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
    <LineChart width={600} height={300} data={resultArray}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="daysDifference"
        stroke="black"
        activeDot={{ r: 10 }}
      />
    </LineChart>
  );
};

export default DateLineChart;
