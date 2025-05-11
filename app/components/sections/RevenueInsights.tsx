"use client";

import React from "react";

interface RevenueInsight {
  highlight: string;
  text: string;
}

interface RevenueInsightsProps {
  insights: RevenueInsight[];
}

const RevenueInsights: React.FC<RevenueInsightsProps> = ({ insights }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow mt-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">
        Revenue Insights
      </h3>
      <ul className="list-disc pl-8 space-y-3 text-lg">
        {insights.map((insight, index) => (
          <li key={index}>
            <strong className="text-pink-400">{insight.highlight}</strong>{" "}
            {insight.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueInsights;