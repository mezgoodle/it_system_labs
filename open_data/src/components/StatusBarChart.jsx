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

const StatusBarChart = ({ data }) => {
  const uniqueStatuses = {};

  data.forEach((item) => {
    const status = item.D_STATUS;
    if (uniqueStatuses[status] === undefined) {
      uniqueStatuses[status] = 1;
    } else {
      uniqueStatuses[status]++;
    }
  });

  const statusesArray = Object.keys(uniqueStatuses).map((status) => {
    return { name: status, count: uniqueStatuses[status] };
  });
  return (
    <BarChart data={statusesArray} width={600} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="green" />
    </BarChart>
  );
};

export default StatusBarChart;
