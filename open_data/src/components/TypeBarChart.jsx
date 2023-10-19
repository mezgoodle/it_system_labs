import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TypeBarChart = ({ data }) => {
  const uniqueTypes = {};

  data.forEach((item) => {
    const status = item.D_TYPE;
    if (uniqueTypes[status] === undefined) {
      uniqueTypes[status] = 1;
    } else {
      uniqueTypes[status]++;
    }
  });

  const typesArray = Object.keys(uniqueTypes).map((status) => {
    return { name: status, count: uniqueTypes[status] };
  });
  return (
    <BarChart data={typesArray} width={600} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="blue" />
    </BarChart>
  );
};

export default TypeBarChart;
