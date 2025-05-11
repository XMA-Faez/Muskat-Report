"use client";

import React from "react";

interface Problem {
  title: string;
  analogy: string;
  why: string[];
}

interface CriticalProblemsProps {
  problems: Problem[];
}

const CriticalProblems: React.FC<CriticalProblemsProps> = ({ problems }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
        THREE CRITICAL PROBLEMS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {problems.map((problem, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3 text-gray-100">
              {index + 1}. {problem.title}
            </h3>
            <p className="mb-4 text-lg">
              <strong>Think of it like:</strong> {problem.analogy}
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Matters:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                {problem.why.map((reason, idx) => (
                  <li key={idx}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalProblems;