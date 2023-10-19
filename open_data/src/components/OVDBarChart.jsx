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

const OVDBarChart = ({ data }) => {
  const uniqueOVDs = {};

  data.forEach((item) => {
    const status = item.OVD;
    if (uniqueOVDs[status] === undefined) {
      uniqueOVDs[status] = 1;
    } else {
      uniqueOVDs[status]++;
    }
  });

  const ovdsArray = Object.keys(uniqueOVDs).map((status) => {
    return { name: status.slice(0, 3), count: uniqueOVDs[status] };
  });
  return (
    <BarChart data={ovdsArray} width={600} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="black" />
    </BarChart>
  );
};

export default OVDBarChart;
