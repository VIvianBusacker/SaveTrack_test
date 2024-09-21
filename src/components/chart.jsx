//THIS IS FOR LINE GRAPH!!!
import React from "react";
import Title from "./title";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { label: "Jan", income: 5000, expense: 3000 },
  { label: "Feb", income: 5200, expense: 3200 },
  { label: "Mar", income: 5500, expense: 3500 },
  { label: "Apr", income: 4800, expense: 2900 },
  { label: "May", income: 5100, expense: 3100 },
  { label: "Jun", income: 5300, expense: 3300 },
  { label: "Jul", income: 5400, expense: 3400 },
  { label: "Aug", income: 5600, expense: 3600 },
  { label: "Sep", income: 5700, expense: 3700 },
  { label: "Oct", income: 5900, expense: 3900 },
  { label: "Nov", income: 6000, expense: 4000 },
  { label: "Dec", income: 6200, expense: 4200 },
];

const Chart = () => {
  return (
    <div className='w-full md:w-2/3'>
      <Title title='Transaction Activity' />

      <ResponsiveContainer width="100%" height={400} className='mt-5'>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' stroke="#e0e0e0" />
          <XAxis dataKey="label" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type='monotone'
            dataKey="income"
            stroke='#4F46E5'
            strokeWidth={2}
            dot={false}
          />
          <Line
            type='monotone'
            dataKey="expense"
            stroke='#10B981'
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
