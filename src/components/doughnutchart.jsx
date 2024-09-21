import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Title from "./title";

const data = [
  { name: "Income", value: 150020 },
  { name: "Expense", value: 50010 },
];

const COLORS = ["#4F46E5", "#10B981", "#FF8042", "#00C49F"];

const DoughnutChart = () => {
  return (
    <div className='w-full md:w-1/3 flex flex-col items-center light:bg-transparent dark:bg-transparent'>
      <Title title='Summary' />

      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart width={500} height={400}>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            innerRadius={110}
            outerRadius={180}
            fill='#8884d8'
            paddingAngle={5}
            dataKey={"value"}>

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}/>

                
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
