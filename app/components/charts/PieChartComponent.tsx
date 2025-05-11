"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface PieChartComponentProps {
  data: {
    name: string;
    value: number;
    percentage?: string;
    color?: string;
  }[];
  colors: string[];
  title: string;
  height?: number;
  tooltipFormatter?: (value: number) => string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  colors,
  title,
  height = 300,
  tooltipFormatter = (value) => `${value}`,
}) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percentage }) => `${name}: ${percentage}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={tooltipFormatter} />
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;