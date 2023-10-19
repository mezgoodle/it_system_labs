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

const SeriesBarChart = ({ data }) => {
  const uniqueSeries = {};

  // Пройдіться по списку об'єктів і додайте серії до об'єкта
  data.forEach((item) => {
    const series = item.D_SERIES || "БЕЗ СЕРІЇ";
    if (uniqueSeries[series] === undefined) {
      uniqueSeries[series] = 1;
    } else {
      uniqueSeries[series]++;
    }
  });

  // Створіть масив об'єктів з ключами "нейм" і "каунт" для серій
  const seriesArray = Object.keys(uniqueSeries).map((series) => {
    return { name: series, count: uniqueSeries[series] };
  });
  return (
    <BarChart data={seriesArray} width={600} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="red" />
    </BarChart>
  );
};

export default SeriesBarChart;
