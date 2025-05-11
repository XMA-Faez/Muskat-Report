"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface BarChartComponentProps {
  data: Array<Record<string, any>>;
  title: string;
  xAxisKey: string;
  dataKeys: string[];
  colors: string[];
  height?: number;
  layout?: "horizontal" | "vertical";
  xAxisAngle?: number;
  tooltipFormatter?: (value: number) => string;
  description?: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  title,
  xAxisKey,
  dataKeys,
  colors,
  height = 300,
  layout = "horizontal",
  xAxisAngle = 0,
  tooltipFormatter = (value) => `${value}`,
  description,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {layout === "horizontal" ? (
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey={xAxisKey} 
                angle={xAxisAngle} 
                textAnchor={xAxisAngle !== 0 ? "end" : "middle"} 
                height={60}
              />
              <YAxis />
              <Tooltip formatter={tooltipFormatter} />
              <Legend />
              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  barSize={30}
                />
              ))}
            </BarChart>
          ) : (
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey={xAxisKey} />
              <Tooltip formatter={tooltipFormatter} />
              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  barSize={30}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      {description && <p className="mt-4 text-gray-400">{description}</p>}
    </div>
  );
};

export default BarChartComponent;